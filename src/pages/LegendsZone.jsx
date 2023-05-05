import React, { useRef, useEffect } from 'react';
import AvatarLegendsZone from "../assets/images/icone/avatar-legend-zone.svg";
import LegendsZoneText from "../assets/images/icone/legends-zone.svg";

import fadeInOnScroll from "../components/FadeAnimation"

export default function LegendsZone() {
  const elements = useRef([]);

  useEffect(() => {
    fadeInOnScroll(elements.current);
  }, []);

  return (
    <section className="bgLegendZone fade-in-scroll" ref={el => elements.current.push(el)}>
      <div className="legendsZoneContainer" id="sectionLegendsZone">
        <h2 className="title-with-gradient legendsZoneTitle">Legends Zone </h2>
        <div className="legendsZoneImg">
          <img className="legendsZoneImg01" src={AvatarLegendsZone} alt="" />
          <img className="legendsZoneImg02" src={LegendsZoneText} alt="" />
        </div>
        <p className="legendsZoneText">
          The Legends Zone is a private space reserved to Meta Legends holders
          to receive exciting airdrops and exclusive bonuses but also keep track
          of their perks, benefits and advancements as holders.
        </p>

        <button className="btnBecome">
          Become <strong>a legend</strong>
        </button>
      </div>
    </section>
  );
}
