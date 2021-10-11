import React from "react";
import { useHistory } from "react-router-dom";
import Login from "./Components/Login";

function LoginPage({ user }) {
  let location = useHistory();
  if (user) {
    location.push("/");
    return null;
  } else {
    return (
      <>
        <div style={{ display: "grid", placeItems: "center", height: "85vh" }}>
          <div
            className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-10 mt-4"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                <img
                  style={{
                    width: "100%",
                    height: "70vh",
                    objectFit: "contain",
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/instaclone-cd42c.appspot.com/o/Capture.PNG?alt=media&token=9bd6f9bb-690e-416f-9665-02a9e7c31329"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
