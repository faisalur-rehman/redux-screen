import React, { useState, useEffect } from "react";
import "./Places.css";
import PlaceCard from "./PlaceCard/PlaceCard";
import PlacesHeader from "../PlacesHeader/PlacesHeader";
import store from "../../store/store";

const Places = () => {
  const [search, setSearch] = useState(false);
  const [searchedPlace, setSearchedPlace] = useState("");
  const [allPlaces, setPlaces] = useState([]);
  const [found, setFound] = useState();
  const [index, setIndex] = useState();
  const [mainIndex, setmainIndex] = useState();

  useEffect(() => {
    setPlaces(store.getState());
    console.log("store", store.getState());
  }, []);
  allPlaces.length > 0 && console.log("Places", allPlaces);

  function handleSortSubmit(sort) {
    if (sort === "section") {
      let arr = store
        .getState()
        .slice()
        .sort(function (a, b) {
          return a[sort] > b[sort] ? 1 : b[sort] > a[sort] ? -1 : 0;
        });
      setPlaces([...arr]);
    } else {
      let newArr = [];

      store.getState().map((section) => {
        let arr = section.places.slice().sort(function (a, b) {
          return a[sort] > b[sort] ? 1 : b[sort] > a[sort] ? -1 : 0;
        });
        newArr.push({ section: section.section, places: arr });
        return newArr;
      });
      setPlaces([...newArr]);
    }
  }

  function handleSearchCancel() {
    setSearch(false);
    setSearchedPlace("");
    setFound();
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let i = 0; i < allPlaces.length; i++) {
      for (let j = 0; j < allPlaces[i].places.length; j++) {
        if (
          allPlaces[i].places[j].name.toLowerCase() ===
          searchedPlace.toLocaleLowerCase()
        ) {
          setFound(allPlaces[i].places[j]);
          setIndex(j);
          setmainIndex(i);
          break;
        }
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
        {!found
          ? allPlaces.length > 0 &&
            allPlaces.map((item, ind) => (
              <div key={ind}>
                <p className="alpha-order">{item.section}</p>
                {item.places.map((place, index) => (
                  <PlaceCard
                    name={place.name}
                    rating={place.rating}
                    groups={place.groups}
                    distance={place.distance}
                    category={place.category}
                    img={place.img}
                    i={index}
                    mainIndex={ind}
                    id={item.id}
                  />
                ))}
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
                mainIndex={mainIndex}
              />
            )}
      </div>
    </div>
  );
};

export default Places;
