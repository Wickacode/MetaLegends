import React, { useRef, useEffect } from 'react';
import teamData from "../assets/data/team.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import fadeInOnScroll from "../components/FadeAnimation"
export default function Team() {
  const elements = useRef([]);

  useEffect(() => {
    fadeInOnScroll(elements.current);
  }, []);
  return (
    <div className="team">
      <div className="teamDescription">
        <h2 className="title-with-gradient titleTeam">Our<br /> <span>team</span></h2>
      <p>An experienced team of passionate entrepreneurs,art directors, developers and game makers dedicated to creating the future. </p>
      </div>
      
      <div className="teamContainer fade-in-scroll"ref={el => elements.current.push(el)} id="sectionTeam">
      {Object.keys(teamData).map((memberKey) => {
        const { name, description, img, instagram, twitter } =
          teamData[memberKey];
        return (
          <div className="teamContainer">
            <div key={memberKey} className="teamCard">
            <div id="teamImgContainer">
              <img className="cardImg" src={img} alt={name} />
              <img className="cardImgReflect" src={img} alt={name} />
            </div>

            <div className="teamInfoContainer">
              <h3>{name}</h3>
              {description && <p>{description}</p>}
              {instagram && (
                <a href={instagram}>
                  <FontAwesomeIcon className="faInstagram" icon={faInstagram} />
                </a>
              )}
              {twitter && (
                <a href={twitter}>
                  <FontAwesomeIcon className="faTwitter" icon={faTwitter} />
                </a>
              )}
            </div>
          </div>
          </div>
          
        );
      })}
    </div>
    </div>
    
  );
}