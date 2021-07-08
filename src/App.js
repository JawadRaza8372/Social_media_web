
import React,{useState,useEffect} from "react";
import "./App.css";
import {db,auth} from "./FirebaseConfig"
import Routesss from "./Routesss";
function App() {

  const [Data, setData] = useState("");
  const [suser, setuser] = useState();

 useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
            setuser(user.uid);
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
            setuser(null);
            console.log("   ------datasave--error---");
      }});

      
},[]);     

  return (
    <div className="app">
    


    <Routesss suser={suser} Data={Data}/>
    



    </div>
  );
}

export default App;
