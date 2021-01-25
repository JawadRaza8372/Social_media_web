import React,{useState,useEffect} from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import SignUp from "./SignUp";
import Login from "./Login";
import UploadPost from "./UploadPost";
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Comment from "./Comment"
import ModelP from "./ModelP"
import DropdownP from "./DropDownP"
import {Navbar,Nav} from "react-bootstrap"
import Notification from "./Notification"
import Home from "./Home"
import {NavLink} from "react-router-dom"
function NavBar({suser,Data}) {
    const [open, setOpen] =useState(false);
    const [open2, setOpen2] =useState(false);
    const [open3, setOpen3] =useState(false);
    const [open4, setOpen4] =useState(false);
    return (
        <>
        <ModelP openModel={open} closeModel={()=>{setOpen(false)}} >
    <SignUp/>
    </ModelP>

{/* model 2 login wala */}
<ModelP openModel={open2} closeModel={()=>{setOpen2(false)}} >
<Login/>
    </ModelP>

{/* model 3 post wala */}
<ModelP openModel={open3} closeModel={()=>{setOpen3(false)}} >
<UploadPost userinfo={Data}/>
    </ModelP>
{/* model 4 notificationWala */}

    <ModelP openModel={open4} closeModel={()=>{setOpen4(false)}} >
<Notification/>
    </ModelP>

    <div className="app_header">
    <div className="row justify-content-center">
    <div className="col-10">
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
  <Navbar.Brand href="#home">
  <img className="app_headerImg" 
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle style={{color:"black"}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
   
   {(suser===null)?<><Button  onClick={()=>{setOpen(true)}}>Sign Up</Button>
     <Button  onClick={()=>{setOpen2(true)}}>Login</Button></>
     : <>
     <NavLink style={{color:"black"}} to="/">
<HomeIcon style={{fontSize:"32",marginLeft:"5px",marginRight:"5px"}}/></NavLink>

<a   onClick={()=>{setOpen3(true)}}>
<AddBoxIcon style={{fontSize:"32",marginLeft:"5px",marginRight:"5px"}}/></a>

<a   onClick={()=>{setOpen4(true);console.log("clicked"+open)}}>
<NotificationsIcon style={{fontSize:"32",marginLeft:"5px",marginRight:"5px"}}/></a>
<DropdownP>
<Avatar style={{height:"32px",marginLeft:"5px"}}  src={`${Data.img}`} alt={`${Data.firstname}`}/>
</DropdownP>




    </>
   }  
   </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
</div>
</div>
        </>
    )
}

export default NavBar
