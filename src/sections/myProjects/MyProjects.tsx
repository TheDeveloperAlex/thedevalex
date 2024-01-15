import React from "react";

import MyProjectList from "./MyProjectList";

import "./MyProjects.css";

export default function MyProjects() {
  return (
    <article className="myProjects-section">
      <div className="pseudo-element-myProjects-circle-top"></div>
      <div className="myProjects-section-content">
        <h2 className="myProjects-section-header">MY PROJECTS</h2>
        <MyProjectList />
      </div>
      <div className="pseudo-element-myProjects-circle-bottom"></div>
    </article>
  );
}
