import React, { useState, useEffect } from "react";
import "./Places.css";
import PlaceCard from "./PlaceCard/PlaceCard";
import PlacesHeader from "../PlacesHeader/PlacesHeader";
import store from "../../store/store";

const Places = () => {
  const [search, setSearch] = useState(false);
  const [searchedPlace, setSearchedPlace] = useState("");
  const [places, setPlaces] = useState([]);
  const [found, setFound] = useState();
  const [index, setIndex] = useState();
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setPlaces(store.getState());
    console.log("store", store.getState());
  }, []);
  places.length > 0 && console.log("Places", places);

  function handleSortSubmit(sort) {
    setSortBy(sort);
    // if (sort === "name") {
    let arr = store
      .getState()
      .slice()
      .sort(function (a, b) {
        return a[sort] > b[sort] ? 1 : b[sort] > a[sort] ? -1 : 0;
      });
    setPlaces([...arr]);
    // }
  }
  console.log("sort", sortBy);

  function handleSearchCancel() {
    setSearch(false);
    setSearchedPlace("");
    setFound();
  }

  function handleSubmit(e) {
    e.preventDefault();
    let result = places.find(
      (element) =>
        element.name.toLowerCase() === searchedPlace.toLocaleLowerCase()
    );
    setFound(result);
    for (let i = 0; i < places.length; i++) {
      if (JSON.stringify(store.getState()[i]) === JSON.stringify(result)) {
        console.log("i", i);
        setIndex(i);
      }
    }
  }
  return (
    <div className="places">
      <div className="sticky-header">
        <PlacesHeader
          setSearch={setSearch}
          handleSortSubmit={handleSortSubmit}
        />
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
          <i className="fas fa-times" onClick={handleSearchCancel}></i>
        </form>
      )}
      <div style={{ marginTop: 70 }}>
        <p className="alpha-order">#</p>
        {!found
          ? places.length > 0 &&
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
            ))
          : found && (
              <PlaceCard
                name={found.name}
                rating={found.rating}
                groups={found.groups}
                distance={found.distance}
                category={found.category}
                img={found.img}
                i={index}
              />
            )}
      </div>
    </div>
  );
};

export default Places;
