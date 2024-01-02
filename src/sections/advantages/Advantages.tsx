import React from "react";

import FullstackItem from "./FullstackItem";
import Languages from "./Languages";
import TeamworkItem from "./TeamworkItem";

export default function Advantages() {
  return (
    <article className="container">
      <ul>
        <FullstackItem />
        <TeamworkItem />
        <Languages />
      </ul>
    </article>
  );
}
