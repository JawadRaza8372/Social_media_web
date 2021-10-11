import React from "react";
import { useHistory } from "react-router-dom";

function My404page() {
  const location = useHistory();

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", height: "85vh" }}>
        <div
          className="col-xl-6 col-lg-6 col-md-8 col-sm-9 col-xs-9"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              border: "3px solid red",
              borderRadius: "20px",
              height: "60vh",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p style={{ color: "red", fontSize: "10vw" }}>404 😢</p>
            <h3 style={{ textAlign: "center" }}>
              The page you requested for was not found.
            </h3>
            <h4
              onClick={() => location.push("/")}
              style={{
                cursor: "pointer",
                color: "green",
                textTransform: "capitalize",
              }}
            >
              Go to Home Page
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default My404page;
