import React, { useState } from "react";
import "./Places.css";
import PlaceCard from "./PlaceCard/PlaceCard";
import PlacesHeader from "../PlacesHeader/PlacesHeader";
import img from "../../assets/images/img1.jpg";
import PlaceModal from "../modals/PlaceModal";

const Places = () => {
  const [placeModal, setPlaceModal] = useState(false);
  let arr = [
    {
      name: "#RAW",
      rating: 4.4,
      groups: "Restaurants, Caltaro",
      distance: "24 KM",
      category: "Rest, Vegan",
      img: img,
    },
    {
      name: "A",
      rating: 4.4,
      groups: "Restaurants, Caltaro",
      distance: "4 KM",
      category: " Vegan",
      img: img,
    },
    {
      name: "W",
      rating: 4,
      groups: "Restaurants",
      distance: "24",
      category: "Rest",
      img: img,
    },
    {
      name: "#RAW",
      rating: 4.4,
      groups: "Restaurants, Caltaro",
      distance: "24 KM",
      category: "Rest, Vegan",
      img: img,
    },
  ];
  console.log(placeModal);
  return (
    <div className="places">
      <PlacesHeader />
      <p className="alpha-order">#</p>
      {arr.map((item, index) => (
        <div key={index} onClick={() => setPlaceModal(true)}>
          <PlaceCard
            name={item.name}
            rating={item.rating}
            groups={item.groups}
            distance={item.distance}
            category={item.category}
            img={item.img}
          />
          <PlaceModal show={placeModal} onHide={() => setPlaceModal(false)} />
        </div>
      ))}
    </div>
  );
};

export default Places;
