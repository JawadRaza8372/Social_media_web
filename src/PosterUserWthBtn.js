import React,{useState,useEffect} from "react";
import {db,auth} from "./FirebaseConfig"
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from './BtTxtPic';

function PosterUserWthBtn() {
  
  const [Data, setData] = useState("");
 useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
            db.collection("users").doc(uid).get().then((doc) => {
                if (doc) {
                    setData(doc.data());
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        } else {
            console.log("   ------datasave--error---");
      }});

      
},[]);     
console.log(Data)
    return (
        <div  className="col-10">
        <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-3 mr-1">
        <Avatar style={{height:"50px",width:"50px",marginLeft:"5px"}}  src={`${Data.img}`} alt={`${Data.firstname}`}/>
        </div>
<div style={{alignItems:"center",paddingTop:"10px",paddingBottom :"10px"}} className="col-6">
    <h6 style={{fontSize:"auto"}}>{Data.firstname} {Data.lastname}</h6>
    <p style={{fontSize:"auto"}}>{Data.email}</p>
</div>
  <div className="col-2 ml-2">
<a><BtTxtPic icon4="g"/></a>
  </div>
        </div>
        </div>
    )
}

export default PosterUserWthBtn
