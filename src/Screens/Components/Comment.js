import React, { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
function Comment({ commenteddata }) {
  const [user, setuser] = useState("");
  useEffect(() => {
    if (commenteddata) {
      db.collection("users")
        .doc(commenteddata.user)
        .get()
        .then((doc) => {
          setuser(doc.data());
        });
    }
  }, []);
  if (user) {
    return (
      <CardHeader
        avatar={
          <Avatar
            style={{ marginRight: "10px" }}
            src={`${user.img}`}
            alt={`${user.firstname}`}
          />
        }
        action={null}
        title={commenteddata.comment}
        subheader={"Regards: " + user.email}
      />
    );
  } else {
    return <p>loading</p>;
  }
}

export default Comment;
