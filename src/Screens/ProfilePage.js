import React,{useState,useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from "./Components/BtTxtPic";
import {NavLink, useHistory} from "react-router-dom"
import {db} from "../FirebaseConfig/FirebaseConfig"
import ProfilePosts from './Components/ProfilePosts';
import ProfileSve from './Components/ProfileSve';
function ProfilePage({user,Data}) {
    const [posts, setposts] = useState(null)
    const [posttype, setposttype] = useState('1')
    let location=useHistory()
    useEffect(()=>{
        db.collection("posts").orderBy('posttime','desc').onSnapshot((snapshot)=>{
            setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
          }) 
        },[]);
  if(Data && user){
    return (
        <div className="col-8 mx-auto mt-4">
         <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-xs-10 col-sm-10 col-md-6 col-xl-4 col-lg-4 order-1 mb-3">
        <Avatar style={{width:'230px',height:'230px'}}  src={`${Data.img}`} alt=""/>
        </div>
<div style={{alignItems:"center"}} className="col-xs-10 col-sm-10 col-md-6 col-lg-8 col-xl-8 order-2 mb-3">

<div className="row mb-2">
   <div className="col">
   <h5 style={{marginRight:"35px"}}>{Data.firstname} {Data.lastname}</h5>
   </div>
   <div className="col">
   <p><NavLink to="/editinfo" style={{cursor:"pointer"}} className="btn-outline-dark">Edit Profile</NavLink></p>
   </div>
   </div>


    <div className="row mb-2">
   
   
  <div className="col"><p>{Data.posts} Posts</p> </div>
  
   <div className="col">
   <p>{Data.followers.length} Followers</p>
   </div> 
   <div className="col">
   <p>{Data.following.length} Following</p>
   </div> 

</div>

    <h6>{Data.email}</h6>
</div>
        </div>



        <div  className="app_header2 overflow-hidden">
    <div style={{display:"flex",justifyContent:'center'}}>
      <div style={{padding:"15px",cursor:"pointer"}} onClick={()=>setposttype('1')} className="justhover"><BtTxtPic text="Posts" icon5="g"/></div>
      <div style={{padding:"15px",cursor:"pointer"}} onClick={()=>setposttype('2')} className="justhover"><BtTxtPic text="Saved" icon3="g"/></div>
    </div>
        </div>

<div className="row mt-3">
{(posttype ==='1')?<ProfilePosts posts={posts} user={user}/>:<ProfileSve posts={Data.save} user={user}/>}
  
  
    
</div>

        </div>
    )
  }
else{
    return <h1>loading</h1>
}

      
}

export default ProfilePage
