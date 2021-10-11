import React, { useState, useEffect } from "react";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import Post from "./Post";
function PostFetching({ crntuser, postdata }) {
  const [followig, setfollowig] = useState(null);
  useEffect(() => {
    db.collection("users")
      .doc(crntuser)
      .onSnapshot((doc) => {
        setfollowig(doc.data().following);
      });
  }, []);
  return (
    <div>
      {followig &&
        postdata &&
        postdata.map((avin) => {
          return (
            <>
              {followig.map((fol) => {
                if (fol === avin.post.postedBy) {
                  return (
                    <Post
                      key={avin.id}
                      postid={avin.id}
                      crntuser={crntuser}
                      userid={avin.post.postedBy}
                      postimg={avin.post.postimg}
                      caption={avin.post.caption}
                      likes={avin.post.likes}
                      comments={avin.post.comments}
                      key={avin.id}
                    />
                  );
                } else if (crntuser === avin.post.postedBy) {
                  return (
                    <Post
                      key={avin.id}
                      postid={avin.id}
                      crntuser={crntuser}
                      userid={avin.post.postedBy}
                      postimg={avin.post.postimg}
                      caption={avin.post.caption}
                      likes={avin.post.likes}
                      comments={avin.post.comments}
                      key={avin.id}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </>
          );
        })}
    </div>
  );
}

export default PostFetching;
