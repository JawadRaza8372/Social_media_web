import React,{useState,useEffect} from "react";
import {auth, db} from "../../FirebaseConfig/FirebaseConfig";
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from './BtTxtPic';

function PosterUserWthBtn({notshow}) {
  
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
            console.log("datasave--error");
      }});

      
},[]);     
    return (
        <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-3 mr-1">
        <Avatar style={{height:"50px",width:"50px",marginLeft:"5px"}}  src={`${Data.img}`} alt={`${Data.firstname}`}/>
        </div>
<div style={{alignItems:"center",paddingTop:"10px",paddingBottom :"10px"}} className="col-6 mr-1">
    <h6 style={{fontSize:"auto"}}>{Data.firstname} {Data.lastname}</h6>
    <p>{Data.email}</p>
</div>
 {(!notshow) && <div className="col-3">
<a style={{float:'right'}} onClick={()=>{auth.signOut();}}><BtTxtPic  icon4="g"/></a>
  </div>}
        </div>
    )
}

export default PosterUserWthBtn
