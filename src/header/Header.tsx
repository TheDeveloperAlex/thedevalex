import React from "react";

import Avatar from "@mui/material/Avatar";
import CustomButton from "../components/button";

import "./Header.css";

export default function Header() {
  return (
    <header className="container header-section">
      <div className="header-section-name-wrapper">
        <Avatar
          alt="Alex Semenenko"
          // src="/static/images/avatar/1.jpg"
          className="header-avatar"
          sx={{
            bgcolor: "purple",
          }}
        >
          AS
        </Avatar>
        <p className="header-phone">+420-735-907-628</p>
      </div>
      <CustomButton href="#collectively" className={"header-section-button"}>
        Contact me
      </CustomButton>
    </header>
  );
}
