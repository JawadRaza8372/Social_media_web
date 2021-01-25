import React,{useEffect,useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from "./BtTxtPic";
import MiniPost from "./MiniPost";
import {Navbar,Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
function ProfilePage({user,Data}) {
    return (
        <div className="col-8 mx-auto mt-4">
         <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-xs-10 col-sm-10 col-md-6 col-xl-4 col-lg-4 order-1">
        <Avatar style={{height:"120px",width:"120px",marginLeft:"5px"}}  src={`${Data.img}`} alt=""/>
        </div>
<div style={{alignItems:"center"}} className="col-xs-10 col-sm-10 col-md-6 col-lg-8 col-xl-8 order-2">

<div className="row">
   <div className="col">
   <h5 style={{marginRight:"35px"}}>{Data.firstname} {Data.lastname}</h5>
   </div>
   <div className="col">
   <p style={{marginRight:"35px"}}><NavLink to="/EditProfile" style={{cursor:"pointer"}} className="btn-outline-dark">Edit Profile</NavLink></p>
   </div>
   </div>


    <div className="row">
   <div className="col">
   <p>Post</p>
   </div> 
   <div className="col">
   <p>Followers</p>
   </div> 
   <div className="col">
   <p>Following</p>
   </div> 

</div>

    <h6>{Data.email}</h6>
</div>
        </div>



        <div  className="app_header2">
        <Navbar bg="white" variant="light">
    <Nav className="mx-auto">
      <Nav.Link href="#home"><BtTxtPic text="Posts" icon5="g"/></Nav.Link>
      <Nav.Link href="#features"><BtTxtPic text="Saved" icon3="g"/></Nav.Link>
    </Nav>
  </Navbar>
        </div>

<div className="row mt-3">
    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 col-xs-10">
        <MiniPost/>
    </div>
    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 col-xs-10">
        <MiniPost/>
    </div>

    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 col-xs-10">
        <MiniPost/>
    </div>
</div>

        </div>
    )
}

export default ProfilePage
