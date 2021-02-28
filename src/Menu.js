import React from 'react'
import {NavLink} from "react-router-dom"
function Menu() {
    return (
        <div className="d-flex flex-column justify-content-start">
            <NavLink to="/editinfo">Edit Info</NavLink>
            <NavLink to="/upadteProfilePhoto">Update Profile Photo</NavLink>
            <NavLink to="/changePassword">Change Password</NavLink>
        </div>
    )
}

export default Menu
