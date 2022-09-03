import React from "react";
import "./card-style.css";

function Card(props) {
  return (
    <div
      data-scroll
      data-scroll-speed="6"
      data-scroll-class="animIntro"
      class="styleCard container"
    >
      <div className="styleImage">
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="Seattle"
        />
      </div>

      <div className="styleCardContent">
        <p className="styleCardTitle">{props.title}</p>
        <p className="styleLocationLabel">{props.location}</p>
        <p className="styleDescription">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
