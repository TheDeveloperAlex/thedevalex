import React from "react";
import StarsWrapper from "../../components/stars";

import MyProjectList from "./MyProjectList";

import "./MyProjects.css";
import {
  starsMyProjectsMobile,
  starsMyProjectsDesktop,
  starsMyProjectsTablet,
  starsMyProjectsMonitor,
} from "./myProjectsStars.data";

export default function MyProjects() {
  return (
    <article className="myProjects-section">
      <StarsWrapper
        mobile={starsMyProjectsMobile}
        tablet={starsMyProjectsTablet}
        desktop={starsMyProjectsDesktop}
        monitor={starsMyProjectsMonitor}
      />
      <div className="pseudo-element-myProjects-circle-top"></div>
      <div className="myProjects-section-content">
        <h2 className="myProjects-section-header">MY PROJECTS</h2>
        <MyProjectList />
      </div>
      <div className="pseudo-element-myProjects-circle-bottom"></div>
    </article>
  );
}
