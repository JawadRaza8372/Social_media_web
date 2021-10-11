import React from "react";
import MiniPost from "./MiniPost";
function ProfilePosts({ posts, user }) {
  return (
    <>
      <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
        My Posts
      </h4>
      {posts &&
        posts.map((postdat) => {
          if (postdat.post.postedBy === user) {
            return <MiniPost crntuser={user} data={postdat} key={postdat.id} />;
          }
        })}
    </>
  );
}

export default ProfilePosts;
