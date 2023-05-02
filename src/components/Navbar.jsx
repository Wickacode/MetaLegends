import React from "react";
import MenuBurger from "./MenuBurger";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoMetaLegends from "../assets/images/logoMetaLegends.svg";
import OpenSeaLogo from "../assets/images/icone/openSeaLogo.png";

export default function Navbar() {

  return (
    <nav>
      <div className="linkList">
        <a href="/">
          <img src={LogoMetaLegends} alt="logo meta legends" />
        </a>
        <ul className="menuList">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#sectionMetaLife">Meta Life</a>
          </li>
          <li>
            <a href="#sectionMetaConnect">Meta Connect</a>
          </li>
          <li>
            <a href="#sectionLegendsZone">Legends Zone</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
        </ul>
        < MenuBurger />
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
      </div>
    </nav>
  );
}
