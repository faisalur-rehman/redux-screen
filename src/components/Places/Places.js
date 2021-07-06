import React from "react";
import "./Places.css";
import PlaceCard from "./PlaceCard/PlaceCard";
import PlacesHeader from "../PlacesHeader/PlacesHeader";
import store from "../../store/store";

const Places = () => {
  return (
    <div className="places">
      <div className="sticky-place-header">
        <PlacesHeader />
      </div>
      <p className="alpha-order">#</p>
      {store.getState().map((item, index) => (
        <div key={index}>
          <PlaceCard
            name={item.name}
            rating={item.rating}
            groups={item.groups}
            distance={item.distance}
            category={item.category}
            img={item.img}
            i={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Places;
