import React from "react";
import "./card-style.css";

function Card(props) {
  return (
    <div
      data-scroll
    //   data-scroll-class="fadeIn"
      // data-scroll-repeat="true"
    data-scroll-speed="9"
      className="card container  "
      style={{ backgroundImage: '' }}
    >
      <div className="cardImg">
        <img
          src={props.image}
          alt="img"
        />
      </div>

      <div className="cardContent">
        <p className="cardTitle">{props.title}</p>
        <p className="cardDesc">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
