import React from "react";
import AvatarLegendsZone from "../assets/images/icone/avatar-legend-zone.svg";
import LegendsZoneText from "../assets/images/icone/legends-zone.svg"

export default function LegendsZone() {
  return (
    <div className="legendsZoneContainer">
        <h2 className="title-with-gradient legendsZoneTitle">Legends Zone </h2>
        <div className="legendsZoneImg">
            <img className= "legendsZoneImg01" src={AvatarLegendsZone} alt="" />
            <img src={LegendsZoneText} alt="" />
        </div>
    </div>
  );
}
