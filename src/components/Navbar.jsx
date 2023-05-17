import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import OpenSeaLogo from "../assets/images/icone/openSeaLogo.png";
import LogoMetaLegends from "../assets/images/logoMetaLegends.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" exact="true" className="nav-logo">
            <img
              className="logoMetaLegends"
              src={LogoMetaLegends}
              alt="logo meta legends"
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                exact="true"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="#sectionMetaLife"
                exact="true"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Meta Life
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="#sectionMetaConnect"
                exact="true"
                activeclassnamee="active"
                className="nav-links"
                onClick={handleClick}
              >
                Meta Connect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="#sectionLegendsZone"
                exact="true"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Meta Legends
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="#sectionTeam"
                exact="true"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Team
              </NavLink>
            </li>
            <div className="socialLinks">
              <a
                href="https://discord.gg/meta-life-889533275545149440"
                className="socialLinksButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="https://twitter.com/metalegendsnft"
                className="socialLinksButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/meta.legends/"
                className="socialLinksButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://opensea.io/collection/meta-legends"
                className="socialLinksButton openSeaIcone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={OpenSeaLogo} alt="Logo Opensea" />
              </a>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
