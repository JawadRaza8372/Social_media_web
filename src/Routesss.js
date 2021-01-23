import React from 'react'
import {Route,Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import ProfilePage from "./ProfilePage"
import EditProfile from "./EditProfile"

function Routesss({suser,Data}) {
    return (
        <>
             <NavBar suser={suser} Data={Data}/>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route  path="/Profile" render={() => (<ProfilePage user={suser} Data={Data} />)}/>  
             <Route  path="/EditProfile" render={() => (<EditProfile user={suser} Data={Data} />)}/>  
             <Route component={""}/>
         </Switch>
        </>
    )
}

export default Routesss
