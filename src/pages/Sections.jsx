import React, { useRef, useEffect } from 'react';
import MetaLegendsSvg from "../assets/images/metaLegends/metaLegends.svg";
import MetaLifeSvg from "../assets/images/metaLegends/metaLife.svg";
import MetaVerseSvg from "../assets/images/metaLegends/metaVerse.svg";
import sectionsData from "../assets/data/sections.json";
import fadeInOnScroll from "../components/FadeAnimation"


export default function Sections() {
  const elements = useRef([]);

  useEffect(() => {
    fadeInOnScroll(elements.current);
  }, []);

  const { firstSection, secondSection, thirdSection } = sectionsData;

  return (
    <div className="sectionsContainer">
      <div id="firstSection" className="fade-in-scroll"ref={el => elements.current.push(el)}>
        <div className="sectionText sectionText1">
          <h2 className="title-with-gradient">{firstSection.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: firstSection.content }}></p>
        </div>
        <div className="metaLegendsImg">
          <img src={MetaLegendsSvg} alt="" />
        </div>
      </div>

      <div id="secondSection" className="fade-in-scroll"ref={el => elements.current.push(el)}>
        <div className="metaLifeImg" id="sectionMetaLife">
          <img src={MetaLifeSvg} alt="" />
        </div>
        <div className="sectionText sectionText2">
          <h2 className="title-with-gradient">{secondSection.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: secondSection.content }}></p>
          <a
          className="btnBecome mobileBtn"
          href="https://meta-life.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit <strong>Meta Life</strong>
        </a>
        </div>
      </div>

      <div id="thirdSection" className="fade-in-scroll"ref={el => elements.current.push(el)}>
        <div className="metaVerseImg">
          <img className="fade-right" src={MetaVerseSvg} alt="" />
        </div>
        <div className="sectionText sectionText3">
          <h2 className="title-with-gradient ">{thirdSection.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: thirdSection.content }}></p>
        </div>
      </div>
    </div>
  );
}