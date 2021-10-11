import React from "react";
import { useHistory } from "react-router-dom";
import SignUp from "./Components/SignUp";

function SignUpPage({ user }) {
  let location = useHistory();
  if (user) {
    location.push("/");
    return null;
  } else {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "85vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "space-between",
            minWidth: "40%",
            maxWidth: "60%",
          }}
        >
          <SignUp />
        </div>
      </div>
    );
  }
}

export default SignUpPage;
