import React from "react";

import Avatar from "@mui/material/Avatar";
import CustomButton from "../components/button";

import "./Header.css";

export default function Header() {
  return (
    <header className="container header-section">
      {/* <div className="header-section-name-wrapper">
        <Avatar
          className="header-avatar"
          sx={{
            bgcolor: "purple",
          }}
        ></Avatar>
        <p className="header-phone">+420-735-907-628</p>
      </div> */}
      <CustomButton href="#contactMe" className={"header-section-button"}>
        Contact me
      </CustomButton>
    </header>
  );
}
