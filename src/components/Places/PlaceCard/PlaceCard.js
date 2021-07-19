import React, { useState } from "react";
import "./PlaceCard.css";
import PlaceModal from "../../modals/PlaceModal";

const PlaceCard = (props) => {
  const [placeModal, setPlaceModal] = useState(false);

  return (
    <>
      <div className="place-card" onClick={() => setPlaceModal(true)}>
        <div>
          <img src={props.img} alt="" />
        </div>
        <div>
          <h4>{props.name}</h4>
          <p>
            <span>Category: </span>
            {props.category}
          </p>
          <p>
            <span>Groups: </span>
            {props.groups}
          </p>
          <p>
            <span>Ratings: </span>
            {props.rating}
          </p>
          <p>
            <span>Distance: </span>
            {props.distance}
          </p>
        </div>
      </div>
      <PlaceModal
        show={placeModal}
        onHide={() => setPlaceModal(false)}
        name={props.name}
        img={props.img}
        i={props.i}
      />
    </>
  );
};

export default PlaceCard;
