import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <nav id="navbar">
      <div className="linkList">
        <a href="">
          <img src={LogoMetaLegends} alt="logo meta legends" />
        </a>

        <TransitionGroup>
          <CSSTransition timeout={500} classNames="fade">
              <ul>
                <li>
                  <a href="">meta legends</a>
                </li>
                <li>
                  <a href="#sectionMetaLife">meta life</a>
                </li>
                <li>
                  <a href="#sectionMetaConnect">meta connect</a>
                </li>
                <li>
                  <a href="#sectionLegendsZone">legends zone</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
              </ul>
          </CSSTransition>
        </TransitionGroup>

        <div className="socialLinks">
          <a
            href="https://discord.gg/meta-life-889533275545149440"
            className="socialLinksButton"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/metalegendsnft"
            className="socialLinksButton"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/meta.legends/"
            className="socialLinksButton"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://opensea.io/collection/meta-legends"
            className="socialLinksButton openSeaIcone"
            target="_blank"
          >
            <img src={OpenSeaLogo} alt="Logo Opensea" />
          </a>
        </div>
      </div>
    </nav>
  );
}
