import React from "react";
import { star } from "./stars.type";

import "./StarItem.css";

export default function StarItem({
  type,
  color,
  top,
  right,
  left = "50%",
  transform,
  animationType,
}: star) {
  const className: string = [
    "star-item",
    type && `star-${type}`,
    animationType && `star-animation-${animationType}`,
  ].join(" ");

  const style = {
    backgroundColor: color,
    top,
    right,
    left,
    transform,
  };

  return <div className={className} style={style} />;
}
