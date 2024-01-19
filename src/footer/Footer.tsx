import React from "react";

import { socials } from "./footer.data";
import {
  starFooterDesktop,
  starFooterMobile,
  starFooterMonitor,
  starFooterTablet,
} from "./footerStars.data";

import Divider from "@mui/material/Divider";
import StarsWrapper from "../components/stars";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <StarsWrapper
        mobile={starFooterMobile}
        tablet={starFooterTablet}
        desktop={starFooterDesktop}
        monitor={starFooterMonitor}
      />
      <div className="footer-content">
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          sx={{
            borderColor: "var(--charcoal-color)",
          }}
          className={"footer-divider"}
        />
        <ul className="footer-list">
          {socials.map(({ name, link, image }) => {
            return (
              <li key={name}>
                <a
                  href={link}
                  className={"footer-list-link"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {image}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pseudo-element-myProjects-circle"></div>
    </footer>
  );
}
