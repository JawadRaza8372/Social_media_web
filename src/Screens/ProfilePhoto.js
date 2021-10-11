import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import { storage, db } from "../FirebaseConfig/FirebaseConfig";
import { useHistory } from "react-router-dom";
function ProfilePhoto({ user, Data }) {
  const [state, setstate] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);
  let location = useHistory();
  const [fs, setf] = useState(null);
  let updatefunc = () => {
    db.collection("users")
      .doc(user)
      .update({ img: state })
      .then(() => {
        setf(null);
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      seterrorMessage(null);
    }, 5000);
    return () => clearInterval(interval);
  }, [errorMessage]);
  const handleUploadSuccess = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        setstate(url);
        setf("done");
      });
  };

  const handleUploadError = (error) => {
    seterrorMessage(error);
  };
  if (user) {
    return (
      <div className=" row my-auto justify-content-center">
        <div className="col-8">
          <center>
            <h4>Update Profile Photo</h4>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="row mt-2 mb-2"
            >
              <div className="mx-auto col-xs-10 col-sm-10 col-md-6 col-xl-4 col-lg-4 order-1">
                <CustomUploadButton
                  className="component"
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={storage.ref("images")}
                  onUploadStart={() => setf("Uploading on server")}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={null}
                >
                  <Avatar
                    style={{ height: "180px", width: "180px" }}
                    src={Data.img}
                    alt=""
                  />
                </CustomUploadButton>
              </div>
            </div>
            <p>Click on photo to Update</p>
            {errorMessage && (
              <div
                style={{
                  background: "red",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  padding: "10px",
                  height: "50px",
                  borderRadius: "10px",
                }}
              >
                <p>{errorMessage}</p>
              </div>
            )}
            {fs ? (
              fs === "Uploading on server" ? (
                <p>{fs}</p>
              ) : fs === "done" ? (
                <button
                  onClick={updatefunc}
                  className="btn btn-outline-success"
                >
                  Update
                </button>
              ) : null
            ) : null}
          </center>
        </div>
      </div>
    );
  } else {
    location.push("/");
    return null;
  }
}

export default ProfilePhoto;
