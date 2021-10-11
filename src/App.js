import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

import { db, auth } from "./FirebaseConfig/FirebaseConfig";
import Routesss from "./Navigation/Routesss";
function App() {
  const [Data, setData] = useState("");
  const [suser, setuser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        setuser(user.uid);
        db.collection("users")
          .doc(uid)
          .onSnapshot((doc) => {
            if (doc) {
              setData(doc.data());
            } else {
              console.log("No such document!");
            }
          });
      } else {
        setuser(null);
        console.log("   ------datasave--error---");
      }
    });
  }, []);
  return (
    <div className="app">
      <Routesss suser={suser} Data={Data} />
    </div>
  );
}

export default App;
