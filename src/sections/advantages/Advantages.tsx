import React, { RefObject } from "react";

import FullstackItem from "./FullstackItem";
import Languages from "./Languages";
import TeamworkItem from "./TeamworkItem";
import StarsWrapper from "../../components/stars";

import {
  starAdvantagesDesktop,
  starAdvantagesMobile,
  starAdvantagesMonitor,
  starAdvantagesTablet,
} from "./starAdvantages.data";

import "./Advantages.css";

interface AdvantagesProps {
  refAdvantages: RefObject<HTMLSelectElement> | null;
}

export default function Advantages({ refAdvantages }: AdvantagesProps) {
  return (
    <article className="container advantages-section" ref={refAdvantages}>
      <StarsWrapper
        mobile={starAdvantagesMobile}
        tablet={starAdvantagesTablet}
        desktop={starAdvantagesDesktop}
        monitor={starAdvantagesMonitor}
      />
      <ul className="advantages-list">
        <FullstackItem />
        <TeamworkItem />
        <Languages />
      </ul>
    </article>
  );
}
