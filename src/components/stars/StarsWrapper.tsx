import React from "react";

import { star, starArray } from "./stars.type";
import { v4 as uuidv4 } from "uuid";

import StarItem from "./StarItem";

import "./StarsWrapper.css";

interface StarsWrapper {
  mobile: starArray;
  tablet: starArray;
  desktop: starArray;
  monitor: starArray;
}
type ReactNodeArray = React.ReactNode[];

const mapStarsItems = (items: starArray) => {
  return items.map((item: star) => <StarItem key={uuidv4()} {...item} />);
};

export default function StarsWrapper({
  mobile,
  tablet,
  desktop,
  monitor,
}: StarsWrapper) {
  const mobileItems: ReactNodeArray = mapStarsItems(mobile);
  const tabletItems: ReactNodeArray = mapStarsItems(tablet);
  const desktopItems: ReactNodeArray = mapStarsItems(desktop);
  const monitorItems: ReactNodeArray = mapStarsItems(monitor);

  return (
    <>
      <div className="stars-wrapper-mobile">{mobileItems}</div>
      <div className="stars-wrapper-tablet">{tabletItems}</div>
      <div className="stars-wrapper-desktop">{desktopItems}</div>
      <div className="stars-wrapper-monitor">{monitorItems}</div>
    </>
  );
}
