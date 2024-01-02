import React from "react";
import { socials } from "./footer.data";

export default function Footer() {
  return (
    <footer>
      <ul>
        {socials.map(({ name, link, image }) => {
          return (
            <li key={name}>
              <div>
                {/*  */}
                {image}
              </div>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
