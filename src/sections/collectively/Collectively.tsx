import React from "react";
import CollectivelyForm from "./CollectivelyForm";

import "./Collectively.css";

export default function Collectively() {
  return (
    <article className="container collectively-section" id={"collectively"}>
      <img
        src={"/photo.jpg"}
        alt={"Alex Semenenko"}
        className={"collectively-section-img"}
      />
      <div>
        <h2 className="collectively-section-header">
          LET’S WORK
          <span className="collectively-section-header-span"> TOGETHER</span>
        </h2>
        <CollectivelyForm />
      </div>
    </article>
  );
}
