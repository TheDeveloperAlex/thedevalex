import React from "react";

import { project } from "./myProjects.types";

import "./MyProject.css";
import CustomButton from "../../components/button";

export default function MyProject({ header, content, image, href }: project) {
  return (
    <div className="myProjects-section-list-item">
      <CustomButton className="myProjects-section-list-item-button" href={href}>
        Visit
      </CustomButton>
      <p className="myProjects-section-list-item-content">{content}</p>
      <h3 className="myProjects-section-list-item-header">{header}</h3>
      <div className="myProjects-section-list-item-img-wrapper">
        <img src={image} className={"myProjects-section-list-item-img"} />
        <div className="myProjects-section-list-item-overlay">Look more...</div>
      </div>
    </div>
  );
}
