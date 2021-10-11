import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../FirebaseConfig/FirebaseConfig";
import PosterUser from "./PosterUser";
function MessagesSidebar() {
  let location = useHistory();
  let [usrid, setusrid] = useState(null);
  let [chatroomData, setchatroomData] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setusrid(user.uid);
      db.collection("chatroom").onSnapshot((snapshot) => {
        setchatroomData(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
    });
  }, []);
  return (
    <div style={{ height: "100%", overflowX: "hidden", overflowY: "auto" }}>
      {chatroomData &&
        chatroomData.map((room) => {
          if (room.post.member1 === usrid) {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => location.push(`/messages/${room.id}`)}
              >
                <PosterUser
                  Data={room.post.member2}
                  subtitle={room.post.roomdate}
                />
              </div>
            );
          } else if (room.post.member2 === usrid) {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => location.push(`/messages/${room.id}`)}
              >
                <PosterUser
                  Data={room.post.member1}
                  subtitle={room.post.roomdate}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}

export default MessagesSidebar;
