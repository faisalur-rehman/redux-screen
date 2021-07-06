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

  useEffect(() => {
    let arr = store
      .getState()
      .slice()
      .sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    setPlaces([...arr]);
  }, []);

  console.log("searchedPlace", index);
  // console.log("found", found);

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
      console.log(found);

      if (JSON.stringify(store.getState()[i]) === JSON.stringify(result)) {
        console.log(1);
        setIndex(i);
      }
    }
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
          <i className="fas fa-times" onClick={handleSearchCancel}></i>
        </form>
      )}
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
  );
};

export default Places;
