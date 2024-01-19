import React from "react";

import StarsWrapper from "../../components/stars";
import CollectivelyForm from "./CollectivelyForm";
import {
  starCollectivelyDesktop,
  starCollectivelyMobile,
  starCollectivelyMonitor,
  starCollectivelyTablet,
} from "./collectivelyStars.data";

import "./Collectively.css";

export default function Collectively() {
  return (
    <article className="container collectively-section" id={"collectively"}>
      <StarsWrapper
        mobile={starCollectivelyMobile}
        tablet={starCollectivelyTablet}
        desktop={starCollectivelyDesktop}
        monitor={starCollectivelyMonitor}
      />
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
