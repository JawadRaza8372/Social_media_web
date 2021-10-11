import React from "react";
import { Dropdown } from "react-bootstrap";
import BtTxtPic from "./BtTxtPic";
import { storage, auth, db } from "../../FirebaseConfig/FirebaseConfig";

function DropDownP({ children, data }) {
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
        <Dropdown.Item href="/Profile">
          <BtTxtPic text="Profile" icon1="g" />
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            auth.signOut();
          }}
        >
          <BtTxtPic text="Logout" icon4="g" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownP;
