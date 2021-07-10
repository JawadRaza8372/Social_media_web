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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

function Post({postid,crntuser,userid,postimg,caption,likes,comments}) {
  let [Likess, setLikess] = useState(likes)
let [bgColor, setbgColor] = useState("transparent");
  let [likeed, setlikeed] = useState("");
    let [saveed, setsaveed] = useState("");
    let [userData, setuserData] = useState(null);
    let [open, setOpen] =useState(false);
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
           (userid === crntuser)?
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>:
        null
        }
        title={userData.firstname+" "+userData.lastname}
        subheader={userData.email}
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

      




<IconButton onClick={()=>console.log("clicked")}>
<ChatOutlinedIcon style={{fontSize:"30"}}/></IconButton></div></div>
      <div className="col col-4">
      <div style={{display:"flex",flexDirection:"row",float:"right"}}>
     { (saveed==="saved")?<IconButton onClick={()=>{setsaveed("")}}><BookmarkOutlinedIcon style={{color:"grey",fontSize:"30"}}/></IconButton>: <IconButton onClick={()=>{setsaveed("saved")}}><BookmarkBorderOutlinedIcon style={{fontSize:"30"}}/></IconButton>
}
      
        </div></div></div>

      <p style={{fontSize:"12px",marginLeft:'5px',marginRight:"5px",textAlign:"left"}}>{likes.length} likes</p>
      {((postimg) && (caption))? <p  style={{marginLeft:'10px',marginRight:"5px",textAlign:"left"}}><strong>{userData.firstname+" "+userData.lastname}:</strong> {caption}</p>:null}
      <ModelP openModel={open} closeModel={()=>{setOpen(false)}} >
<div style={{flexDirection:"row"}}>
    <input style={{width:'80%',marginRight:"10px"}}/>
    <a onClick={()=>{console.log("commented")}} className="btn btn-outline-success">Post</a>
    </div>
    </ModelP>
          
         
    


        </div>
    )}
    else{
      return <p>loading</p>
    }
}

export default Post



