import React from "react";

import { IconLanguages } from "../../components/icons";

export default function Languages() {
  return (
    <li className="advantages-list-item advantages-list-item-languages">
      <div className="advantages-list-item-icon-wrapper">
        <IconLanguages />
      </div>
      <div className="advantages-list-item-text-wrapper">
        <h2 className="advantages-list-item-header">5 Languages</h2>
        <p className="advantages-list-item-content advantages-list-item-content-languages">
          Fluent in Ukrainian (<span>C2</span>), Russian (<span>C2</span>), and
          English (<span>B2+</span>), with basic proficiency in Polish (A2) and
          Czech(A2).
        </p>
      </div>
    </li>
  );
}
