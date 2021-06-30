import React from "react";
import "./PlaceCard.css";

const PlaceCard = ({ name, category, rating, groups, distance, img }) => {
  return (
    <div className="place-card">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          <span>Category: </span>
          {category}
        </p>
        <p>
          <span>Groups: </span>
          {groups}
        </p>
        <p>
          <span>Ratings: </span>
          {rating}
        </p>
        <p>
          <span>Distance: </span>
          {distance}
        </p>
      </div>
    </div>
  );
};

export default PlaceCard;
