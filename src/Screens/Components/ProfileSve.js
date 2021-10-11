import React, { useState, useEffect } from "react";
import MiniPost from "./MiniPost";
import { db } from "../../FirebaseConfig/FirebaseConfig";
function ProfileSve({ posts, user }) {
  const [post, setpost] = useState(null);
  useEffect(() => {
    db.collection("posts")
      .orderBy("posttime", "desc")
      .onSnapshot((snapshot) => {
        setpost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
      });
  }, []);
  return (
    <>
      <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
        Saved Posts
      </h4>

      {posts &&
        posts.map((postdat) => {
          return (
            <>
              {post &&
                post.map((pt) => {
                  return pt.id === postdat ? (
                    <MiniPost crntuser={user} data={pt} />
                  ) : null;
                })}
            </>
          );
        })}
    </>
  );
}

export default ProfileSve;
