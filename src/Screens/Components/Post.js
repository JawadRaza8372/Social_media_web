import React,{useState,useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ModelP from "./ModelP"
import {db} from "../../FirebaseConfig/FirebaseConfig"
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Post({userid,postimg,caption}) {
    const [likeed, setlikeed] = useState("");
    const [saveed, setsaveed] = useState("");
    const [userData, setuserData] = useState(null);
    const [open, setOpen] =useState(false);
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    console.log(userData)
    let fetch=async ()=>{
      let result=await db.collection("users").doc(userid).get();
      setuserData(result.data())
    }
    useEffect(() => {
      fetch()
    }, [])
   if(userData){
    return (
        <div style={{maxWidth:"500px",backgroundColor:"white",border:"1px solid lightgrey",marginBottom:"45px"}}>
        <div style={{display:"flex",alignItems:"center",padding:"20px"}}>
         <Avatar style={{marginRight:"10px"}}  src={`${userData.img}`} alt={`${userData.firstname}`}/>
            <h3>{userData.firstname+" "+userData.lastname}</h3> </div>
          <a  onDoubleClick={()=>{setlikeed("liked")}}>  <img style={{width:"100%",objectFit:"contain",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey"}} src={`${postimg}`} alt="pics"/>
          </a>

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
        <div className="row">

        <div className="row" style={{marginLeft:'5px',marginRight:"5px"}}>
      <p style={{fontSize:"12px"}}>739 likes</p>
      </div>
      </div>   
      <div className="row" style={{marginLeft:'5px',marginRight:"5px"}}>
      <p><strong>{userData.firstname+" "+userData.lastname}:</strong> {caption}</p>
      </div>
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



