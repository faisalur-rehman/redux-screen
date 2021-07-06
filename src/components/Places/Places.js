import React, { useState, useEffect } from "react";
import "./Places.css";
import PlaceCard from "./PlaceCard/PlaceCard";
import PlacesHeader from "../PlacesHeader/PlacesHeader";
import store from "../../store/store";

const Places = () => {
  const [search, setSearch] = useState(false);
  const [searchedPlace, setSearchedPlace] = useState("");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    let arr = store
      .getState()
      .slice()
      .sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    setPlaces(arr);
  }, []);

  console.log("searchedPlace", places);

  function handleSearchCancel() {
    setSearch(false);
    setSearchedPlace("");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="places">
      <div className="sticky-place-header">
        <PlacesHeader setSearch={setSearch} />
      </div>
      {search && (
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search Places"
            value={searchedPlace}
            onChange={({ target }) => setSearchedPlace(target.value)}
          />
          <i class="fas fa-times" onClick={handleSearchCancel}></i>
        </form>
      )}
      <p className="alpha-order">#</p>
      {places.length > 0 &&
        places.map((item, index) => (
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
