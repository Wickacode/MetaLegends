import React from "react";
import Img01 from "../assets/images/img01.png"
import Img02 from "../assets/images/img02.png"
import Img03 from "../assets/images/img03.png"
import Img04 from "../assets/images/img04.png"
import Img05 from "../assets/images/img05.png"
import Img06 from "../assets/images/img06.png"

export default function ImagesLot() {
  return (
    <div className="imagesLotContainer">
        <img className="img01" src= {Img01} alt="" />
        <img className="img02" src= {Img02} alt="" />
        <img className="img03" src= {Img03} alt="" />
        <img className="img04" src= {Img04} alt="" />
        <img className="img05" src= {Img05} alt="" />
        <img className="img06" src= {Img06} alt="" />
    </div>
  );
}
