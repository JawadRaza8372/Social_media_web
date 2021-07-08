import React from 'react'
import { useHistory } from 'react-router-dom'
import Login from './Components/Login'

function LoginPage({user}) {
    let location=useHistory();
    if (user){
        location.push("/")
        return null   
    }
    else{
        return (
            <div style={{display:"grid",placeItems:"center",height:"85vh"}}>
                <Login/>
            </div>
        )
    }
}

export default LoginPage
