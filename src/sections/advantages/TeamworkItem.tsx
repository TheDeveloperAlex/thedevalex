import React from "react";
import { IconTeamwork } from "../../components/icons";

export default function TeamworkItem() {
  return (
    <li className="advantages-list-item advantages-list-item-teamwork">
      <div className="advantages-list-item-icon-wrapper">
        <IconTeamwork />
      </div>
      <div className="advantages-list-item-text-wrapper">
        <h2 className="advantages-list-item-header">Masterful teamwork</h2>
        <p className="advantages-list-item-content advantages-list-item-content-teamwork">
          Dedicated to constant skill growth, I excel in{" "}
          <span>critical thinking</span> and adapt seamlessly. Experienced{" "}
          <span>team lead</span> with mastered teamwork skills.
        </p>
      </div>
    </li>
  );
}
