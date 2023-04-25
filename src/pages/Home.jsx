import React from "react";
import ImagesLot from "../components/ImagesLot";

export default function Home() {
  const handleButtonClick = () => {
    window.open("https://opensea.io/collection/meta-legends", "_blank");
  };

  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="leftSpace">
          <h1>
            <span className="title-with-gradient">12345 Legends</span> <br />
            to Save humanity
          </h1>
          <p>
            Meta Legends is a collection of{" "}
            <span className="strongText">12345 NFTs </span> on the Ethereum
            blockchain composed of 7 distinctive classes and generated with
            thousands of uniquely designed 3D traits. <br /> <br />
            Minted in December 2021, Meta Legends was a{" "}
            <span className="strongText">pioneer in the use of 3D</span> and has
            made history as one of the most successful collections of all time.{" "}
            <br /> <br />
            Meta Legends has spread over 150 countries and gathered more than
            200,000 people around a single revolutionary vision: to build the
            most prominent <span className="strongText">
              {" "}
              Web3 ecosystem{" "}
            </span>. <br /> <br />
            <span className="strongText">
              {" "}
              Your journey in the Metaverse begins now.{" "}
            </span>
          </p>
        </div>
        <div className="rightSpace">
          <ImagesLot />
        </div>
      </div>
      
      <button className="btn" onClick={handleButtonClick}>
        Get your <strong>meta legend</strong>
      </button>
    </div>
  );
}
