import React,{useState,useEffect} from "react";
import {auth, db} from "../../FirebaseConfig/FirebaseConfig";
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from './BtTxtPic';

function PosterUserWthBtn({userinfo,userId}) {
  
  console.log(userId)
  console.log(userinfo)
   
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
<button className="btn btn-outline-success">
Follow
</button>
  </div>
        </div>
        </div>
    )
}

export default PosterUserWthBtn
