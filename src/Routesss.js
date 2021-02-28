import React from 'react'
import {Route,Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import ProfilePage from "./ProfilePage"
import EditProfile from "./EditProfile"
import Passwordupdate from "./Passwordupdate"
import ProfilePhoto from './ProfilePhoto'
import InfoUpdate from './InfoUpdate'
import RoutesssLink from './RoutesssLink'
import {useLocation} from "react-router-dom";
function Routesss({suser,Data}) {
    const location =useLocation().pathname;
    return (
        <>
      {      (location.match("/home"|| "/"))?
  <>  <NavBar suser={suser} Data={Data}/>
               <RoutesssLink suser={suser} Datas={Data}/>
  </>:(location.match("/Profile"))?
  <> <NavBar suser={suser} Data={Data}/>
               <RoutesssLink suser={suser} Datas={Data}/>
  </>:
  <EditProfile suser={suser} Data={Data}>
  <RoutesssLink suser={suser} Datas={Data}/>

   </EditProfile>
}
          
         

    </>);
    }
         


export default Routesss
