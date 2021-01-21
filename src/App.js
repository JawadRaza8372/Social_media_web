import React,{useState,useEffect} from "react";
import "./App.css";
import {db,auth} from "./FirebaseConfig"
import PostScreen from "./PostScreen"
import NavBar from "./NavBar";
import PostFetching from "./PostFetching";
import ProfilePage from "./ProfilePage"
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
                    // console.log("Document data:", doc.data());
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
    


    <NavBar suser={suser} Data={Data}/>
    
    <PostScreen/>
    
    {/* <PostFetching/> */}
{/* <ProfilePage/> */}


    </div>
  );
}

export default App;
