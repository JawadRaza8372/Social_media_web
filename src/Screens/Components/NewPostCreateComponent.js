import React, { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ModelP from "./ModelP";
import UploadPost from "./UploadPost";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import "../../index.css";
function NewPostCreateComponent({ suser, userData }) {
  const [open3, setOpen3] = useState(false);
  const [state, setstate] = useState("");
  let onSubmitFunction = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        postedBy: suser,
        caption: state,
        postimg: null,
        posttime: new Date(),
        likes: [],
        comments: [],
      })
      .then(() => {
        let totlpost = parseInt(userData.posts) + 1;
        db.collection("users")
          .doc(suser)
          .update({ posts: `${totlpost}` })
          .then(() => {
            setstate("");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        style={{
          maxWidth: "500px",
          backgroundColor: "white",
          border: "1px solid lightgrey",
          marginBottom: "45px",
          overflow: "hidden",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              style={{ marginRight: "10px" }}
              src={`${userData.img}`}
              alt={`${userData.firstname}`}
            />
          }
          action={null}
          title={userData.email}
          subheader={userData.firstname + " " + userData.lastname}
        />
        <div
          className="col-10"
          style={{
            marginTop: "10px",
            marginBottom: "15px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <form
            onSubmit={onSubmitFunction}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              value={state}
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
                outline: "0",
              }}
              placeholder="Type Something And Hit Enter"
              onChange={(e) => setstate(e.target.value)}
            />

            <button
              type="submit"
              style={{
                background: "transparent",
                border: "none",
                display: "none",
              }}
            >
              post
            </button>
          </form>
        </div>
        <div
          onSubmit={onSubmitFunction}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={() => setOpen3(true)} className="instabutton">
            <PhotoLibraryIcon
              style={{ color: "green", fontSize: "35px", marginRight: "5px" }}
            />
            Photo / Images
          </button>
        </div>
      </div>
      <ModelP
        openModel={open3}
        closeModel={() => {
          setOpen3(false);
        }}
      >
        <UploadPost userinfo={suser} userData={userData} />
      </ModelP>
    </>
  );
}

export default NewPostCreateComponent;
