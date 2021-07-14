import React,{useState,useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import ModelP from "./ModelP"
import {db} from "../../FirebaseConfig/FirebaseConfig"
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Comment from './Comment';
import DelatePostDropdown from './DelatePostDropdown';

function Post({postid,crntuser,userid,postimg,caption,likes,comments}) {
  let [Likess, setLikess] = useState(likes)
let [bgColor, setbgColor] = useState("transparent");
  let [Coments, setComents] = useState(comments);
  let [inputv, setinputv] = useState({user:crntuser,comment:'',sendDate:new Date().toDateString(),sendTime:new Date().toLocaleTimeString()});

    let [userData, setuserData] = useState(null);
    let [open, setOpen] =useState(false);
    let [saveed, setsaveed] = useState(null);
    let [postsvalue, setpostsvalue] = useState(null);

    let savepost=async()=>{
        saveed=[...saveed,postid]
        await db.collection('users').doc(crntuser).update({save:saveed}).then(()=>{
          console.log('saved the post')
        }
        )
      
    }
    let unsavepost=async()=>{
      let unsave=saveed.filter((lik)=>lik !== postid);
     saveed=unsave
    await db.collection('users').doc(crntuser).update({save:saveed}).then(()=>{
      console.log('unsaved the post')
    }
    )
    }
    useEffect(() => {
      db.collection('users').doc(crntuser).onSnapshot(doc=>{
        setsaveed(doc.data().save)})
    }, [])
    useEffect(() => {
      db.collection('users').doc(crntuser).onSnapshot(doc=>{
        setpostsvalue(doc.data().posts)})
    }, [])
    let comentSubmit=(e)=>{
      e.preventDefault();
      Coments=[...comments,inputv]
      db.collection("posts").doc(postid).update({comments:Coments}).then(()=>console.log('posted'))
      inputv.comment=''
    }
    let fetch=async ()=>{
      let result=await db.collection("users").doc(userid).get();
      setuserData(result.data())
    }
    useEffect(() => {
      fetch()
    }, [])
    useEffect(() => {
      let x = Math.floor(Math.random() * 256);
      let y = 100+ Math.floor(Math.random() * 256);
      let z = 50+ Math.floor(Math.random() * 256);
      setbgColor("rgb(" + x + "," + y + "," + z + ")")
    }, [])
    let updatefunction=async()=>{
     await db.collection('posts').doc(postid).update({likes:Likess}).then(()=>{
        console.log("done")
      })
    }
    let likepushFunction=()=>{

      if (likes.length !== 0){
       let check= likes.find((userlike)=> userlike === crntuser)
       if(check){
        console.log('nothing')
       }
       else{
        updatefunction()
       }
       
      }
      else{
        updatefunction()
      }
        
       
     
    }
    let likeeFunction=async()=>{
      if(Likess.find(likd=> likd===crntuser)){console.log("nothing")}
      else{
        Likess=[...likes,crntuser]
        likepushFunction()
      }
   
      
    }
    
    let unlikepushFunction=()=>{
      updatefunction()
    }
    let unlikeeFunction=async()=>{
      
     let unlike=likes.filter((lik)=>lik !== crntuser);
     Likess=unlike;
      unlikepushFunction()
    }


   



   if(userData){
    return (
        <div style={{maxWidth:"500px",backgroundColor:"white",border:"1px solid lightgrey",marginBottom:"45px",overflow:"hidden"}}>
        <CardHeader
        avatar={
          <Avatar style={{marginRight:"10px"}}  src={`${userData.img}`} alt={`${userData.firstname}`}/>
        }
        action={
           ((postsvalue) && (userid === crntuser))?
           <IconButton aria-label="settings">
            <DelatePostDropdown postid={postid} postval={postsvalue} userid={crntuser}>
   
   <MoreVertIcon />
  </DelatePostDropdown>
           </IconButton>
         :
        null
        }
        title={userData.email}
        subheader={userData.firstname+" "+userData.lastname}
      />
       
          {(postimg && caption)?<a onDoubleClick={likeeFunction}><img style={{width:"100%",objectFit:"contain",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey"}} src={`${postimg}`} alt="pics"/>
          </a>:null}
          {((!postimg) && (caption))?<div onDoubleClick={likeeFunction} style={{width:"100%",height:"250px",display:"grid",placeItems:"center",overflowY:"auto",overflowX:"hidden",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey",background:bgColor}} ><p className="caption">{caption}</p></div>:null}
          <div className="row">
      <div className="col col-8">
      <div style={{display:"flex",flexDirection:"row",float:"left"}}>
      
      
      
      
      {
       (likes.find((userlike)=> userlike === crntuser))? (<IconButton   onClick={unlikeeFunction}><FavoriteIcon style={{color:"red",fontSize:"30"}}/></IconButton>)
       :( <IconButton  onClick={likeeFunction}><FavoriteBorderIcon style={{fontSize:"30"}}/></IconButton>)
       
       }

      




<IconButton onClick={()=>setOpen(true)}>
<ChatOutlinedIcon style={{fontSize:"30"}}/></IconButton></div></div>
      <div className="col col-4">
      
      <div style={{display:"flex",flexDirection:"row",float:"right"}}>
      {(saveed)?saveed.find(sav=> sav === postid )?
        <IconButton onClick={unsavepost}><BookmarkOutlinedIcon style={{color:"grey",fontSize:"30"}}/></IconButton>
        :   <IconButton onClick={savepost}><BookmarkBorderOutlinedIcon style={{fontSize:"30"}}/></IconButton>:null

      }
  

      
        </div></div></div>

      <p style={{fontSize:"12px",marginLeft:'5px',marginRight:"5px",textAlign:"left"}}>{likes.length} likes</p>
      {((postimg) && (caption))? <p  style={{marginLeft:'10px',marginRight:"5px",textAlign:"left"}}><strong>{userData.firstname+" "+userData.lastname}:</strong> {caption}</p>:null}
      <ModelP openModel={open} closeModel={()=>{setOpen(false)}}><>
      <div style={{height:"500px",overflowY:"auto",overflowX:'hidden'}}>
{comments && comments.map((comtdt,index)=>(<Comment key={index} commenteddata={comtdt}/>
))

}
      
      </div><center>
      <div style={{width:"320px"}}>
      <form className="myform" onSubmit={comentSubmit} style={{border:'1px solid green'}}>
<div  className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10" style={{alignItems:"flex-start"}} >
            <input type="text" value={inputv.comment} onChange={e=>setinputv({...inputv,comment:e.target.value})}  placeholder="Enter Email To Search" style={{width:"80%",height:'40px',outlineWidth:"0px",border:"none",paddingLeft:"10px",marginLeft:"10px"}} />
            </div>            
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-10" >
<button type="submit" className="btn btn-outline-success"><SendIcon/></button>
</div></div>
    </form>
      </div>
      </center>
      
</>
    </ModelP>
          
         
    


        </div>
    )}
    else{
      return <p>loading</p>
    }
}

export default Post



