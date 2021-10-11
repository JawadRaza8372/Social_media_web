import React from "react";
import { Dropdown } from "react-bootstrap";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import { IconButton } from "@material-ui/core";

function DelatePostDropdown({ postid, postval, userid, children }) {
  let delfuntion = () => {
    let newval = parseInt(postval) - 1;
    db.collection("posts")
      .doc(postid)
      .delete()
      .then(() => {
        db.collection("users")
          .doc(userid)
          .update({ posts: `${newval}` })
          .then(() => {});
      });
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {children}
      </Dropdown.Toggle>
      <Dropdown.Menu align="left">
        <IconButton onClick={delfuntion}>
          <p>Delete</p>
        </IconButton>
        {/* <Dropdown.Item href="/Profile"><BtTxtPic text="Profile" icon1="g" /></Dropdown.Item>
            <Dropdown.Item href="#/action-1"><BtTxtPic text="Setting" icon2="g" /></Dropdown.Item>
            <Dropdown.Item href="#/action-2"><BtTxtPic text="Saved" icon3="g" /></Dropdown.Item>
            <Dropdown.Item onClick={()=>{auth.signOut();}}><BtTxtPic text="Logout" icon4="g" /></Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DelatePostDropdown;
