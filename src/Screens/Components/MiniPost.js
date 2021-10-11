import React, { useState, useEffect } from "react";
import BtTxtPic from "./BtTxtPic";
import ModelP from "./ModelP";
import Post from "./Post";
function MiniPost({ crntuser, data }) {
  const [open, setopen] = useState(false);
  const [bgColor, setbgColor] = useState("transparent");
  useEffect(() => {
    let x = Math.floor(Math.random() * 256);
    let y = 100 + Math.floor(Math.random() * 256);
    let z = 50 + Math.floor(Math.random() * 256);
    setbgColor("rgb(" + x + "," + y + "," + z + ")");
  }, []);
  return (
    <>
      <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 col-xs-10">
        <div className="container">
          {data.post.postimg ? (
            <img
              src={data.post.postimg}
              alt={data.post.caption}
              className="image"
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "135px",
                display: "grid",
                placeItems: "center",
                overflowY: "auto",
                overflowX: "hidden",
                borderBottom: "1px solid lightgrey",
                borderTop: "1px solid lightgrey",
                background: bgColor,
              }}
            >
              <p className="caption">{data.post.caption}</p>
            </div>
          )}

          <a
            onClick={() => {
              setopen(true);
            }}
          >
            <div className="overlay">
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  height: "100%",
                }}
              >
                <BtTxtPic
                  style={{ marginRight: "10px" }}
                  text2={`${data.post.likes.length}`}
                  icon6="h"
                />
                {data.post.comments ? (
                  <BtTxtPic text2={`${data.post.comments.length}`} icon7="h" />
                ) : null}
              </div>
            </div>
          </a>
        </div>
      </div>
      <ModelP
        openModel={open}
        closeModel={() => {
          setopen(false);
        }}
      >
        <Post
          postid={data.id}
          crntuser={crntuser}
          userid={data.post.postedBy}
          postimg={data.post.postimg}
          caption={data.post.caption}
          likes={data.post.likes}
          comments={data.post.comments}
        />
      </ModelP>
    </>
  );
}

export default MiniPost;
