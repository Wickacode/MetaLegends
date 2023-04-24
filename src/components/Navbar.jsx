import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="linkList">
        <img src="http://localhost:8080/img/title-logo.1c7a7a86.svg" alt="logo meta legends" />
        <ul>
          <li>meta legends</li>
          <li>meta life</li>
          <li>meta connect</li>
          <li>legends zone</li>
          <li>Team</li>
        </ul>
        <div className="socialLinks">
          <button>
            <link
              rel="stylesheet"
              href="https://discord.com/invite/meta-legends"
            />
            <FontAwesomeIcon icon={faDiscord} />
          </button>
          <button>
            <link rel="stylesheet" href="https://twitter.com/metalegendsnft" />
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <link
              rel="stylesheet"
              href="https://www.instagram.com/meta.legends/"
            />
            <FontAwesomeIcon icon={faInstagram} />
          </button>
        </div>
      </div>
    </nav>
  );
}
