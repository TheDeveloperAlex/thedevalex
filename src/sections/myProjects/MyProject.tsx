import React from "react";

import { project } from "./myProjects.types";

export default function MyProject({ header, content, image }: project) {
  return (
    <li>
      <img src={image} />
      <h3>{header}</h3>
      <p>{content}</p>
    </li>
  );
}
