import React from "react";
import "./Places.css";
import PlaceCard from "./PlaceCard/PlaceCard";
import PlacesHeader from "../PlacesHeader/PlacesHeader";
import img from "../../assets/images/img1.jpg";
const Places = () => {
  return (
    <div className="places">
      <PlacesHeader />
      <p className="alpha-order">#</p>
      <PlaceCard
        name="#RAW"
        rating={4.4}
        groups="Restaurants, Caltaro"
        distance="24 KM"
        category="Rest, Vegan"
        img={img}
      />
      <p className="alpha-order">A</p>
      <PlaceCard
        name="#RAW"
        rating={4.4}
        groups="Restaurants, Caltaro"
        distance="24 KM"
        category="Rest, Vegan"
        img={img}
      />
      <PlaceCard
        name="#RAW"
        rating={4.4}
        groups="Restaurants, Caltaro"
        distance="24 KM"
        category="Rest, Vegan"
        img={img}
      />
      <PlaceCard
        name="#RAW"
        rating={4.4}
        groups="Restaurants, Caltaro"
        distance="24 KM"
        category="Rest, Vegan"
        img={img}
      />
    </div>
  );
};

export default Places;
