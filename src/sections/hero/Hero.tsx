import React from "react";
import { IconArrow } from "../../components/icons";

export default function Hero() {
  return (
    <article className="container">
      <h1>
        <span>ALEX SEMENENKO.</span>
        <span>
          FULLSTACK <span>DEVELOPER</span>
        </span>
      </h1>
      <p>
        Frontend Developer, 2+ years in React.js, Next.js, and Typescript for
        high-performance JavaScript apps.
      </p>
      <p>Look more</p>
      <IconArrow />
    </article>
  );
}
