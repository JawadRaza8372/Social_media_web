import React from 'react'
import { useHistory } from 'react-router-dom'
import SignUp from './Components/SignUp'

function SignUpPage({user}) {
    let location=useHistory();
    if (user){
        location.push("/")
        return null   
    }
    else
    {
        return (
            <div style={{display:"grid",placeItems:"center",height:"85vh"}}>
                <SignUp/>
            </div>
        )
    }   
}

export default SignUpPage
