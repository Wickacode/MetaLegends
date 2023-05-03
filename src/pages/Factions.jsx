import React from "react";
import Celestial01 from "../assets/images/sections/celestials/celestials01.svg";
import Celestial02 from "../assets/images/sections/celestials/celestials02.svg";
import Celestial03 from "../assets/images/sections/celestials/celestials03.svg";

import Celestial from "../assets/images/emblems/celestials.svg";
import Burners from "../assets/images/emblems/burners.svg";
import Cybers from "../assets/images/emblems/cybers.svg";
import Goldbois from "../assets/images/emblems/goldbois.svg";
import MatrixAngels from "../assets/images/emblems/matrix-angels.svg";
import Roboters from "../assets/images/emblems/roboters.svg";
import Roughs from "../assets/images/emblems/roughs.svg";

import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Factions() {
  return (
    <div className="factionsContainer">
      <div className="factionsLeftBloc">
        <img className="activeImg" src={Celestial01} alt="" />
        <div className="avatarsFactions">
          <img src={Celestial01} alt="" />
          <img src={Celestial02} alt="" />
          <img src={Celestial03} alt="" />
        </div>
      </div>
      <div className="factionsRightBloc">
        <div className="emblems">
          <img src={Celestial} alt="" />
          <img src={Burners} alt="" />
          <img src={Roboters} alt="" />
          <img src={Goldbois} alt="" />
          <img src={MatrixAngels} alt="" />
          <img src={Cybers} alt="" />
          <img src={Roughs} alt="" />
        </div>
        <div className="textSection">
          <h2>Celestials</h2>
          <p>
            Great guardians of the Metaverse, the Celestials are the most
            powerful of all classes with an influence and a power that is close
            to the Gods.
            <br />
            <br />
            As they are greatly evolved, they have developed a deep sense of
            ethics and morals that exist in symbiosis with their vision. They
            managed to coexist with Burners, despite their superiority.
            <br />
            <br />
            Their mission is to govern the Metaverse.
          </p>
        </div>
        <div className="socialFactions">
          <a
            href="https://discord.gg/meta-life-889533275545149440"
            className="socialLinkFactions socialDiscord"
            target="_blank"
            rel="noopener noreferrer"
          > Joins us on<strong>Discord</strong>
            <FontAwesomeIcon className="socialDiscordIcone" icon={faDiscord} />
           </a> 
            <a
            href="https://twitter.com/metalegendsnft"
            className="socialLinkFactions socialTwitter"
            target="_blank"
            rel="noopener noreferrer"
          > Joins us on<strong>Twitter</strong>
            <FontAwesomeIcon className="socialTwitterIcone" icon={faTwitter} />
          </a>
          
        </div>
      </div>
    </div>
  );
}
