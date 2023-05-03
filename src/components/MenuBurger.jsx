import React from "react";
import BarSolid from "../assets/images/icone/bars-solid.svg";

function MenuBurger() {
  return (
    <div className="menuBurger">
      <nav>
        <a>
        <img className="barSolid" src={BarSolid} alt="" />
        </a>
        <button>
          <span class="burgerIcon"></span>
        </button>
        <div className="burgerMenuList">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#sectionMetaLife">Meta Life</a>
            </li>
            <li>
              <a href="#sectionMetaConnect">Meta Connect</a>
            </li>
            <li>
              <a href="#sectionLegendsZone">Legends Zone</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MenuBurger;
