import React, { RefObject } from "react";
import { IconArrow } from "../../components/icons";
import StarsWrapper from "../../components/stars";
import {
  starHeroDesktop,
  starHeroMobile,
  starHeroMonitor,
  starHeroTablet,
} from "./starsHero.data";

import "./Hero.css";

interface HeroProps {
  refAdvantages: RefObject<HTMLSelectElement> | null;
}

export default function Hero({ refAdvantages }: HeroProps) {
  const scrollToAdvantages = () => {
    if (refAdvantages) {
      refAdvantages.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="container hero-section">
      <h1 className="hero-header">
        <p className="hero-header-name">ALEX SEMENENKO</p>
        <p className="hero-header-fullstack">
          <span>FULLSTACK </span>
          <span className="hero-header-developer-wrapper">
            <span className="hero-header-developer">DEVELOPER</span>
            <span className="hero-header-developer-span hero-header-developer-span-top-left"></span>
            <span className="hero-header-developer-span hero-header-developer-span-top-right"></span>
            <span className="hero-header-developer-span hero-header-developer-span-bottom-right"></span>
            <span className="hero-header-developer-span hero-header-developer-span-bottom-left"></span>
          </span>
        </p>
      </h1>
      <p className="hero-content">
        2+ years in React.js, Next.js, and Typescript for high-performance
        JavaScript web-apps.
      </p>
      <p className="hero-look-more">Look more</p>
      <button className="hero-look-more-arrow" onClick={scrollToAdvantages}>
        <IconArrow />
      </button>
      <StarsWrapper
        mobile={starHeroMobile}
        tablet={starHeroTablet}
        desktop={starHeroDesktop}
        monitor={starHeroMonitor}
      />
    </article>
  );
}
