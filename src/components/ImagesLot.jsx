import React, { useRef } from "react";
import imageLot from "../assets/images/ImagesLot/lotImages.png";

export default function ImagesLot() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    if (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    ) {
      const midCardWidth = rect.width / 2;
      const midCardHeight = rect.height / 2;
      const angleY = (mouseX - rect.left - midCardWidth) / 8;
      const angleX = (mouseY - rect.top - midCardHeight) / 8;
      card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    } else {
      card.children[0].style.transform = "";
    }
  };
  return (
    <div className="imagesLotContainer" onMouseMove={handleMouseMove}>

      <div className="card" ref={cardRef}>
        <div className="contentCard">
          <img src={imageLot} alt="Lot d'images Meta Legends" />
        </div>
      </div>
    </div>
  );
}
