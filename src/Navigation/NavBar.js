import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import UploadPost from "../Screens/Components/UploadPost";
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import ModelP from "../Screens/Components/ModelP"
import DropdownP from "../Screens/Components/DropDownP"
import {Navbar,Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
function NavBar({suser,Data}) {
    const [open3, setOpen3] =useState(false);
    const [open4, setOpen4] =useState(false);
    return (
        <>

{/* model 3 post wala */}
<ModelP openModel={open3} closeModel={()=>{setOpen3(false)}} >
<UploadPost userinfo={suser}/>
    </ModelP>
{/* model 4 notificationWala */}

 

    <div className="app_header">
    <div className="row justify-content-center">
    <div className="col-10">
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
  <Navbar.Brand href="/home">
  <img className="app_headerImg" 
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle style={{color:"black"}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav style={{marginLeft:"auto"}}>
   
   {(suser===null)? <h5 style={{alignSelf:"center",color:"red"}}>Please Login</h5> : <>
     <NavLink style={{color:"black"}} to="/">
<HomeIcon style={{fontSize:"32",marginLeft:"5px",marginRight:"5px"}}/></NavLink>

<a   onClick={()=>{setOpen3(true)}}>
<AddBoxIcon style={{fontSize:"32",marginLeft:"5px",marginRight:"5px"}}/></a>

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
