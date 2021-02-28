import React from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import ProfilePage from "./ProfilePage"
import EditProfile from "./EditProfile"
import Passwordupdate from "./Passwordupdate"
import ProfilePhoto from './ProfilePhoto'
import InfoUpdate from './InfoUpdate'
function RoutesssLink({suser,Datas}) {
  
    return (
 

        <>
         <Switch>
             <Route exact={true} path="/home" component={Home}/>
             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>
             <Route exact={true}   path="/Profile" render={() => (<ProfilePage user={suser} Data={Datas} />)}/>  
             <Route exact={true}   path="/editinfo" render={() => (<InfoUpdate user={suser} Data={Datas} />)}/>  
             <Route exact={true}   path="/upadteProfilePhoto" render={() => (<ProfilePhoto user={suser} Data={Datas} />)}/>  
             <Route exact={true}   path="/changePassword" render={() => (<Passwordupdate user={suser} Data={Datas} />)}/>  
             <Route component={""}/>
         </Switch>
        </>
    )
}

export default RoutesssLink
