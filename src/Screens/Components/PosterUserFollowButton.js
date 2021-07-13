import React,{useState,useEffect} from "react";
import {auth, db} from "../../FirebaseConfig/FirebaseConfig";
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from './BtTxtPic';
import { IconButton } from "@material-ui/core";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function PosterUserWthBtn({userinfo,userId,curentUser,notif}) {
  let [curentuserData, setcurentuserData] = useState(null)
  let [curentuserfollowers, setcurentuserfollowers] = useState(null)
  let [buttontype, setbuttontype] = useState(null)
  let messageRoom=async()=>{
    await db.collection('chatroom').add({member1:curentUser,member2:userId,roomdate:new Date().toDateString(),roomtime:new Date().toLocaleTimeString()}).then(()=>{
      notif()
    })
  }
let fetchdata=async()=>{
 await db.collection('users').doc(curentUser).onSnapshot(doc=>{setcurentuserData(doc.data().following);
})}
let fetchdata1=async()=>{
  await db.collection('users').doc(curentUser).onSnapshot(doc=>{
     setcurentuserfollowers(doc.data().followers)});
 }
let checktype=()=>{
  if(curentuserData.find((cfol)=>cfol === userId)){
   if(curentuserfollowers.find((cfolw)=>cfolw === userId)){
     setbuttontype('3')
   }
   else{
     setbuttontype('2')
   }
  }
  else{
   setbuttontype('1')
  }
  
}
useEffect(() => {
 fetchdata().then(()=>{
  fetchdata1()
 })
},[])
useEffect(() => {
  if(curentuserfollowers && curentuserData){
    checktype()
  }
}, [curentuserfollowers])


let userfollowers=userinfo.followers;
let followfunction=async()=>{
  userfollowers=[...userfollowers,curentUser];
  curentuserData=[...curentuserData,userId]
  await db.collection('users').doc(userId).update({followers:userfollowers}).then(()=>{
    db.collection('users').doc(curentUser).update({following:curentuserData}).then(()=>
    {
      setbuttontype('2')
    })

  })
}
    return (
        <div  className="col-10">
        <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2 mr-1">
        <Avatar style={{height:"80px",width:"80px",marginLeft:"5px"}}  src={`${userinfo.img}`} alt={`${userinfo.firstname }`}/>
        </div>
<div  className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2">
    <h5 style={{fontSize:"auto"}}>{userinfo.firstname+' '+' '+userinfo.lastname}</h5></div>
    <div  className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2">

    <h6 style={{fontSize:"auto"}}>{userinfo.email}</h6>
</div>
  <div className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2 ml-2">
{(buttontype === '1')? <button onClick={followfunction} className="btn btn-outline-success">
Follow</button>:(buttontype === '2')?<p style={{color:"green"}}>Followed</p>:(buttontype === '3')?
<IconButton onClick={messageRoom}><QuestionAnswerIcon style={{color:"green"}}/></IconButton>:null
}
  </div>
        </div>
        </div>
    )
}

export default PosterUserWthBtn
