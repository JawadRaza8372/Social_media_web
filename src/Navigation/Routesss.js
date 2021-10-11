import React from "react";
import NavBar from "./NavBar";
import EditProfile from "../Screens/Components/EditProfile";
import RoutesssLink from "./RoutesssLink";
import { useLocation } from "react-router-dom";
function Routesss({ suser, Data }) {
  const location = useLocation().pathname;
  return (
    <>
      {location.match("/home" || "/") ? (
        <>
          {" "}
          <NavBar suser={suser} Data={Data} />
          <RoutesssLink suser={suser} Datas={Data} />
        </>
      ) : location.match("/editinfo") ? (
        <EditProfile suser={suser} Data={Data}>
          <RoutesssLink suser={suser} Datas={Data} />
        </EditProfile>
      ) : location.match("/changePassword") ? (
        <>
          {" "}
          <EditProfile suser={suser} Data={Data}>
            <RoutesssLink suser={suser} Datas={Data} />
          </EditProfile>
        </>
      ) : location.match("/upadteProfilePhoto") ? (
        <>
          {" "}
          <EditProfile suser={suser} Data={Data}>
            <RoutesssLink suser={suser} Datas={Data} />
          </EditProfile>
        </>
      ) : (
        <>
          <NavBar suser={suser} Data={Data} />
          <RoutesssLink suser={suser} Datas={Data} />
        </>
      )}
    </>
  );
}

export default Routesss;
