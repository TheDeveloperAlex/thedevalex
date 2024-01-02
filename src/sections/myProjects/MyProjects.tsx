import React from "react";
import MyProject from "./MyProject";
import { projects } from "./myProjects.data";

export default function MyProjects() {
  return (
    <article>
      <h2>MY PROJECTS</h2>
      <ul>
        {projects.map((item) => {
          return <MyProject key={item.header} {...item} />;
        })}
      </ul>
    </article>
  );
}
