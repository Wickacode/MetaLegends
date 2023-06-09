import React, { useRef, useEffect } from "react";
import Mockup1 from "../assets/images/mockups/mockup1.svg";
import Mockup2 from "../assets/images/mockups/mockup2.svg";
import Mockup3 from "../assets/images/mockups/mockup3.svg";

import fadeInOnScroll from "../components/FadeAnimation";

export default function MetaConnect() {
  const elements = useRef([]);

  useEffect(() => {
    fadeInOnScroll(elements.current);
  }, []);

  return (
    <div
      className="metaConnectContainer fade-in-scroll"
      ref={(el) => elements.current.push(el)}
      id="sectionMetaConnect"
    >
      <div className="mcTopBloc">
        <div className="sectionText">
          <h2 className="title-with-gradient">Meta connect</h2>
          <p>
            NFTs are the new social. <br />
            <br />
            NFTs are the new way to connect with others around the world. Meta
            Connect is the first true social hub focused toward NFT enthusiasts
            that truly enables its users.
            <br />
            <br /> This platform will provide new ways to make friends, build
            your network, organize events, and promote your collection.
            <br />
            <br /> Enhance the value of your brand with the game-changing
            platform Meta Connect.
          </p>
        </div>
        <div className="mockups">
          <img className="mockup1" src={Mockup1} alt="" />
          <img className="mockup2" src={Mockup2} alt="" />
        </div>
      </div>

      <div className="mcBottomBloc">
        <div className="textZone firstTextZone">
          <div>
            <h3 className="titleLeft">Word map</h3>
            <p className="paragraphZone">
              Enable location to appear on the map. Connect with other users and
              search for places to explore. Enable Ghost Mode when you want to
              go unnoticed.
            </p>
          </div>
          <div>
            <h3 className="titleLeft">Wallet access</h3>
            <p className="paragraphZone">
              Synchronize your wallet, access your blue-chip NFTs, and choose
              one to be your avatar.
            </p>
          </div>
        </div>
        <div className="mockup3">
          <img src={Mockup3} alt="" />
        </div>
        <div className="textZone secondTextZone">
          <div>
            <h3 className="titleRight">Partners</h3>
            <p className="paragraphZone">
              Partnering with Meta Connect will provide your brand or business
              prioritized exposure to our valued user base. Want to register
              your brand or business with us? Simply reach out!
            </p>
          </div>
          <div>
            <h3 className="titleRight">Social Features</h3>
            <p className="paragraphZone">
              Stay in the loop with the public feed. Keep in touch with friends
              and spark new conversations with nearby users. Share experiences
              or stories with picture and vocal messages.
            </p>
          </div>
        </div>
      </div>

      <button className="btnJoin">
        <a href="https://meta-connect.io/" target="_blank">
          Join <strong>meta connect</strong>
        </a>
      </button>
    </div>
  );
}
