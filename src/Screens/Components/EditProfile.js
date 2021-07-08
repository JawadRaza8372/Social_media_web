import React from 'react'
import NavBar from "../../Navigation/NavBar"
import {NavLink} from "react-router-dom"

function EditProfile({suser,Data,children}) {
    return (<>
    <NavBar suser={suser} Data={Data}/>
        <div className="col-10 mx-auto mt-4">
        <div className="row justify-content-center">
       <div className="col-2 border-right"> 
       <div className="container">
       <div className="d-flex flex-column justify-content-start">
      

            <NavLink className="navlinkclass" exact  activeClassName="active_class  h6" to="/editinfo">Edit Info</NavLink>
            <NavLink className="navlinkclass" exact  activeClassName="active_class  h6" to="/upadteProfilePhoto">Update Profile Photo</NavLink>
            <NavLink className="navlinkclass" exact  activeClassName="active_class  h6" to="/changePassword">Change Password</NavLink></div>
        </div>
       </div> 
       <div className="col-10">
       <div className="container">
      {children}
       </div>
    
       </div> 

        </div>
    </div></>
    )
}

export default EditProfile
