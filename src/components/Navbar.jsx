import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoMetaLegends from "../assets/images/logoMetaLegends.svg"

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="linkList">
        <img src={LogoMetaLegends} alt="logo meta legends" />
        <ul>
          <li>meta legends</li>
          <li>meta life</li>
          <li>meta connect</li>
          <li>legends zone</li>
          <li>Team</li>
        </ul>
        <div className="socialLinks">
          <a href="https://discord.com/invite/meta-legends" className="socialLinksButton" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://twitter.com/metalegendsnft" className="socialLinksButton" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/meta.legends/" className="socialLinksButton" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </nav>
  );
}
