import React from 'react'
import {Route,Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import ProfilePage from "./ProfilePage"

function Routesss({suser,Data}) {
    return (
        <>
             <NavBar suser={suser} Data={Data}/>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/Profile" component={ProfilePage}/>
             <Route component={""}/>
         </Switch>
        </>
    )
}

export default Routesss
