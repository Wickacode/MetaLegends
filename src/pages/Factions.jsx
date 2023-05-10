import React, { useState, useEffect } from "react";
import data from "../assets/data/factions.json";
import FactionLeftBloc from "../components/FactionsDetails";
import SocialFactions from "../components/socialFactions";

export default function Factions() {
  const [activeFaction, setActiveFaction] = useState("celestials");
  const avatars = activeFaction in data ? data[activeFaction].gallery : [];
  const [activeAvatar, setActiveAvatar] = useState("");

  useEffect(() => {
    setActiveAvatar(avatars[0] || "");
  }, [activeFaction]);

  const handleClick = (faction) => {
    setActiveFaction(faction);
  };

  const factions = Object.keys(data).map((faction) => {
    const { title, description, emblem, onEmblem } = data[faction];
    return (
      <div className="faction" key={faction}>
        <div className="factionDesktop">
          <div className="emblemsContainer">
            <div className="emblem" onClick={() => handleClick(faction)}>
              <img src={emblem} alt={`${title} emblem`} 
              className={`offEmblem ${activeFaction === faction ? 'active' : ''}`}/>
              <img src={onEmblem} alt={`${title} emblem`}
              className={`onEmblem ${activeFaction === faction ? 'active' : ''}`}/>
            </div>
          </div>
        </div>
      </div>
    );
  });

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
        <div className="factions">{factions}</div>
        {activeFaction in data && (
          <div className="textSection">
            <div className="titleUnits">
              <h2>{data[activeFaction].title}</h2>
              <span>{data[activeFaction].units}</span>
            </div>
            <p className="factionsDescription" dangerouslySetInnerHTML={{__html: data[activeFaction].description}}>
</p>
          </div>
        )}
        <SocialFactions />
      </div>
    </div>
    
  );
}
