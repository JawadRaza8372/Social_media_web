import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../../FirebaseConfig/FirebaseConfig";
function PosterUser({ Data, subtitle }) {
  const [userinfo, setuserinfo] = useState(null);
  useEffect(() => {
    db.collection("users")
      .doc(Data)
      .get()
      .then((docs) => {
        setuserinfo(docs.data());
      });
  }, []);
  if (userinfo) {
    return (
      <div className="col-8">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="row mt-2 mb-2"
        >
          <div className="col-xs-10 col-sm-10 col-md-6 col-xl-4 col-lg-4 order-1">
            <Avatar
              style={{ height: "50px", width: "50px" }}
              src={userinfo.img}
              alt={userinfo.email}
            />
          </div>
          <div
            style={{
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            className="col-xs-10 col-sm-10 col-md-6 col-lg-8 col-xl-8 order-2"
          >
            <h6>{userinfo.email}</h6>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}

export default PosterUser;
