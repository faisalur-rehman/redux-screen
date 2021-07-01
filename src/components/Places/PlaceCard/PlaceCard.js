import React, { useState } from "react";
import "./PlaceCard.css";
import PlaceModal from "../../modals/PlaceModal";

const PlaceCard = ({ name, category, rating, groups, distance, img }) => {
  const [placeModal, setPlaceModal] = useState(false);

  return (
    <>
      <div className="place-card" onClick={() => setPlaceModal(true)}>
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
      <PlaceModal
        show={placeModal}
        onHide={() => setPlaceModal(false)}
        name={name}
        img={img}
      />
    </>
  );
};

export default PlaceCard;
