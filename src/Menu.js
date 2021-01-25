import React from 'react'
import {NavLink} from "react-router-dom"
function Menu() {
    return (
        <div className="d-flex flex-column justify-content-start">
            <NavLink to="">Edit Info</NavLink>
            <NavLink to="">Update Profile Photo</NavLink>
            <NavLink to="">Change Password</NavLink>
        </div>
    )
}

export default Menu
