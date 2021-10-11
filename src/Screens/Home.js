import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostScreen from "./Components/PostScreen";
import { db } from "../FirebaseConfig/FirebaseConfig";
import ScrollToTop from "react-scroll-to-top";

function Home({ user, Data }) {
  const [posts, setposts] = useState(null);
  useEffect(() => {
    db.collection("posts")
      .orderBy("posttime", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);
  let location = useHistory();
  if (user) {
    return (
      <>
        <ScrollToTop style={{ background: "#6f00ff" }} smooth color="white" />

        <PostScreen currentuser={user} post={posts} userData={Data} />
      </>
    );
  } else {
    location.push("/login");
    return null;
  }
}

export default Home;
