import React, { useState } from "react";
import SortModal from "../modals/SortModal";
import "./PlacesHeader.css";
const PlacesHeader = ({ setSearch, setSortBy, handleSortSubmit }) => {
  const [shouldSort, setShouldSort] = useState(false);
  return (
    <>
      <div className="places-header">
        <i className="fas fa-search" onClick={() => setSearch(true)}></i>
        <i className="fas fa-plus-circle"></i>
        <i className="fas fa-filter" onClick={() => setShouldSort(true)}></i>
        <i className="fas fa-tasks"></i>
      </div>
      <SortModal
        show={shouldSort}
        onHide={() => setShouldSort(false)}
        setSortBy={setSortBy}
        handleSortSubmit={handleSortSubmit}
        // name={props.name}
        // img={props.img}
        // i={props.i}
      />
    </>
  );
};

export default PlacesHeader;
