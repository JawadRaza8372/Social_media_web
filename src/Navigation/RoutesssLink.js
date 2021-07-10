import React from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import Home from "../Screens/Home"
import ProfilePage from "../Screens/ProfilePage"
import Passwordupdate from "../Screens/Passwordupdate"
import ProfilePhoto from '../Screens/ProfilePhoto'
import InfoUpdate from '../Screens/InfoUpdate'
import LoginPage from '../Screens/LoginPage'
import SignUpPage from '../Screens/SignUpPage'
import Search from '../Screens/Search'
function RoutesssLink({suser,Datas}) {
  
    return (
 

        <>
         <Switch>
             <Route exact={true} path="/home" render={() => (<Home user={suser}/>)}/>
             <Route exact={true} path="/signup" render={() => (<SignUpPage user={suser}/>)}/>
             <Route exact={true} path="/login" render={() => (<LoginPage user={suser}/>)}/>

             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>
             <Route exact={true}   path="/Profile" render={() => (<ProfilePage user={suser} Data={Datas} />)}/> 
             <Route exact={true}   path="/search" component={Search}/>   
             <Route exact={true}   path="/editinfo" render={() => (<InfoUpdate user={suser} Data={Datas} />)}/>  
             <Route exact={true}   path="/upadteProfilePhoto" render={() => (<ProfilePhoto user={suser} Data={Datas} />)}/>  
             <Route exact={true}   path="/changePassword" render={() => (<Passwordupdate user={suser} Data={Datas} />)}/>  
             <Route component={""}/>
         </Switch>
        </>
    )
}

export default RoutesssLink
