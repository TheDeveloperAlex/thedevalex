import React, { useState, RefObject, useEffect, useMemo } from "react";
import MyProject from "./MyProject";
import MyProjectListSlider from "./MyProjectListSlider";
import { projects } from "./myProjects.data";

export default function MyProjectList() {
  const [width, setWidth] = useState<number>(320);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectsItems = projects.map((item) => {
    return <MyProject key={item.header} {...item} />;
  });

  return width >= 1024 ? (
    <div className="container myProjects-section-list">{projectsItems}</div>
  ) : (
    <MyProjectListSlider>{projectsItems}</MyProjectListSlider>
  );
}
