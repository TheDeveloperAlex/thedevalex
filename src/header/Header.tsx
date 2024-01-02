import React from "react";

export default function Header() {
  return (
    <header className="container header-section">
      <div className="header-section-name-wrapper">
        <div
          style={{
            width: "25px",
            height: "25px",
            background: "#D9D9D9",
            borderRadius: "50%",
          }}
        />
        <p className="name">Alexander Semenenko</p>
      </div>
      <a className="button header-section-button" href={"#collectively"}>
        Contact me
      </a>
    </header>
  );
}
