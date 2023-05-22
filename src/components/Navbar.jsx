import React, { useState } from "react";
import { Link } from "react-scroll";
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
          <Link
            to="sectionHome"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-logo"
            onClick={handleClick}
          >
            <img
              className="logoMetaLegends"
              src={LogoMetaLegends}
              alt="logo meta legends"
            />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="sectionHome"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sectionMetaLife"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Meta Life
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sectionMetaConnect"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Meta Connect
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sectionLegendsZone"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Meta Legends
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="sectionTeam"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Team
              </Link>
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
