import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import ImagesLot from "../components/ImagesLot";
import OpenSeaLogo from "../assets/images/icone/openSeaLogo.png";
import Factions from "../pages/Factions";
import Sections from "./Sections";
import MetaConnect from "./MetaConnect";
import LegendsZone from "./LegendsZone";
import Team from "../components/Team";
import Document from "../assets/Terms&Conditions Edited-2.docx";

export default function Home() {
  const handleButtonClick = () => {
    window.open("https://opensea.io/collection/meta-legends", "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".bloc").classList.add("fadeOnLoad");
    }, 100);
  }, []);

  return (
    <div className="homeContainer">
      <div className="bg-menu">
        <Navbar />
        <div className="bloc fade-in">
          <div className="homeContent">
            <div className="introduction">
              <h1 className="bigTitle">
                <span className="title-with-gradient centerBigTitle">
                  12345 Legends
                </span>{" "}
                <br />
                <span className="subText">to Save humanity</span>
              </h1>
              <p>
                Meta Legends is a collection of{" "}
                <span className="strongText">12345 NFTs </span> on the Ethereum
                blockchain composed of 7 distinctive classes and generated with
                thousands of uniquely designed 3D traits. <br /> <br />
                Minted in December 2021, Meta Legends was a{" "}
                <span className="strongText">pioneer in the use of 3D</span> and
                has made history as one of the most successful collections of
                all time. <br /> <br />
                Meta Legends has spread over 150 countries and gathered more
                than 200,000 people around a single revolutionary vision: to
                build the most prominent{" "}
                <span className="strongText"> Web3 ecosystem </span>. <br />{" "}
                <br />
                <span className="strongText">
                  {" "}
                  Your journey in the Metaverse begins now.{" "}
                </span>
              </p>
            </div>
            <ImagesLot />
          </div>
          <button className="btn" onClick={handleButtonClick}>
            Get your <strong>meta legend</strong>
            <img src={OpenSeaLogo} alt="Logo Opensea" />
          </button>
          <Factions />
        </div>
      </div>

      <Sections />
      <MetaConnect />
      <LegendsZone />
      <Team />
      <div className="footer">
          <a href={Document}>© Terms & conditions</a>
      </div>
    </div>
  );
}
