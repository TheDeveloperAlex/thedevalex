import React from "react";
import { IconCog } from "../../components/icons";

import "./FullstackItem.css";

export default function FullstackItem() {
  return (
    <li className="advantages-list-item advantages-list-item-fullstack">
      <div className="advantages-list-item-icon-wrapper">
        <IconCog />
      </div>
      <div className="advantages-list-item-text-wrapper">
        <h2 className="advantages-list-item-header">Technical skills</h2>
        <p className="advantages-list-item-content advantages-list-item-content-fullstack">
          Expert in <span>JavaScript</span>, <span>React</span>,
          <span>Next.js</span>, <span>TypeScript</span>, and{" "}
          <span>Node.js</span>, I sculpt digital masterpieces, not just code.
        </p>
      </div>
    </li>
  );
}
