import React from "react";
import { IconCog } from "../../components/icons";

export default function FullstackItem() {
  return (
    <li>
      <div>
        <IconCog />
      </div>
      <h2>Fullstack developer</h2>
      <p>
        Expert in <span>JavaScript</span>, <span>React</span>,
        <span>Next.js</span>, <span>TypeScript</span>, and <span>Node.js</span>,
        I sculpt digital masterpieces, not just code.
      </p>
    </li>
  );
}
