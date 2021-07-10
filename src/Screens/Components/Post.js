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

function Post({crntuser,userid,postimg,caption,likes,comments}) {
  const classes = useStyles();
  console.log("curent user")
console.log(crntuser)
const [bgColor, setbgColor] = useState("transparent");
  const [likeed, setlikeed] = useState("");
    const [saveed, setsaveed] = useState("");
    const [userData, setuserData] = useState(null);
    const [open, setOpen] =useState(false);
    console.log(userData)
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
       
          {(postimg && caption)?<a  onDoubleClick={()=>{setlikeed("liked")}}><img style={{width:"100%",objectFit:"contain",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey"}} src={`${postimg}`} alt="pics"/>
          </a>:null}
          {((!postimg) && (caption))?<div  onDoubleClick={()=>{setlikeed("liked")}} style={{width:"100%",height:"250px",display:"grid",placeItems:"center",overflowY:"auto",overflowX:"hidden",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey",background:bgColor}} ><p className="caption">{caption}</p></div>:null}
          <div className="row">
      <div className="col col-8">
      <div style={{display:"flex",flexDirection:"row",float:"left"}}>
      {(likeed==="liked")?   <a style={{margin:"10px"}} onClick={()=>{setlikeed("")}}><FavoriteIcon style={{color:"red",fontSize:"30"}}/></a>: <a style={{margin:"10px"}} onClick={()=>{setlikeed("liked")}}><FavoriteBorderIcon style={{fontSize:"30"}}/></a>}
<a style={{margin:"10px"}} onClick={()=>console.log("clicked")}>
<ChatOutlinedIcon style={{fontSize:"30"}}/></a></div></div>
      <div className="col col-4">
      <div style={{display:"flex",flexDirection:"row",float:"right"}}>
     { (saveed==="saved")?<a style={{margin:"10px"}} onClick={()=>{setsaveed("")}}><BookmarkOutlinedIcon style={{color:"grey",fontSize:"30"}}/></a>: <a style={{margin:"10px"}} onClick={()=>{setsaveed("saved")}}><BookmarkBorderOutlinedIcon style={{fontSize:"30"}}/></a>
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



