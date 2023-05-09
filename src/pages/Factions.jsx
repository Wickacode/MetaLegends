import React, { useState, useEffect } from "react";
import data from "../assets/data/factions.json";
import FactionLeftBloc from "../components/FactionsDetails";


import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Factions() {
  const [activeFaction, setActiveFaction] = useState("celestials");

  const handleClick = (faction) => {
    setActiveFaction(faction);
  };

  const factions = Object.keys(data).map((faction) => {
    const { title, description, emblem, units, gallery } = data[faction];
    return (
      <div className="faction" key={faction}>
        <div className="factionDesktop">
          <div className="emblemsContainer">
            <div className="emblem" onClick={() => handleClick(faction)}>
              <img src={emblem} alt={`${title} emblem`} />
            </div>
          </div>
        </div>

        <div className="factionMobile" key={`${faction}-mobile`}>
          <div className="emblem" onClick={() => handleClick(faction)}>
            <img src={emblem} alt={`${title} emblem`} />
          </div>
        </div>
      </div>
    );
  });

  const avatars = activeFaction in data ? data[activeFaction].gallery : [];

  const [activeAvatar, setActiveAvatar] = useState("");

  useEffect(() => {
    setActiveAvatar(avatars[0] || "");
  }, [activeFaction]);

  const handleAvatarClick = (avatar) => {
    setActiveAvatar(avatar);
  };

  return (
    <div className="factionsContainer">
      <FactionLeftBloc
        activeAvatar={activeAvatar}
        avatars={avatars}
        handleAvatarClick={handleAvatarClick}
      />
      <div className="factionsRightBloc">
        <div className="factions">
          {factions}
        </div>
        {activeFaction in data && (
          <div className="textSection">
            <div className="titleUnits">
              <h2>{data[activeFaction].title}</h2>
              <span>{data[activeFaction].units}</span>
            </div>
            <p className="factionsDescription">{data[activeFaction].description}</p>
          </div>
        )}

        <div className="socialFactions">
          <a
            href="https://discord.gg/meta-life-889533275545149440"
            className="socialLinkFactions socialDiscord"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>
              Joins us on <strong>Discord</strong>
            </span>
            <FontAwesomeIcon className="socialDiscordIcone" icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/metalegendsnft"
            className="socialLinkFactions socialTwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>
              Joins us on <strong>Twitter</strong>
            </span>
            <FontAwesomeIcon className="socialTwitterIcone" icon={faTwitter} />
          </a>
        </div>
      </div>
      
    </div>
  );
}
