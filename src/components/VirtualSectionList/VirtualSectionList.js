import React, { Component } from "react";
import SectionList from "react-virtualized-sectionlist";

const renderHeader = ({
  title,
  sectionIndex,
  key,
  style,
  isScrolling,
  isVisible,
  parent,
}) => {
  return (
    <div key={key} className="list--header" style={style}>
      <h4>{title}</h4>
    </div>
  );
};

const renderRow = ({
  item,
  sectionIndex,
  rowIndex,
  key,
  style,
  isScrolling,
  isVisible,
  parent,
}) => {
  return (
    <div key={key} style={style}>
      <p>{item.name}</p>
      <p>{item.do}</p>
      <p>{item.value}</p>
    </div>
  );
};

const ROW_HEIGHT = 30;

const sections = [
  //   {
  //     title: "Group 1",
  //     data: ["Item 1 of Group 1", "Item 2 of Group 1", "Item 3 of Group 1"],
  //   },
  {
    title: "Group 2",
    data: [
      { name: "Item 1 of Group 2" },
      { value: "Item 2 of Group 2" },
      { do: "Item 3 of Group 2" },
    ],
  },
  {
    title: "Group 2",
    data: [
      { name: "Item 1 of Group 2" },
      { value: "Item 1 of Group 2" },
      { do: "Item 1 of Group 2" },
    ],
  },
  //   {
  //     title: "Group 3",
  //     data: ["Item 1 of Group 3", "Item 2 of Group 3", "Item 3 of Group 3"],
  //   },
];

const MySectionList = () => {
  return (
    <SectionList
      width={300}
      height={250}
      sections={sections}
      sectionHeaderRenderer={renderHeader}
      sectionHeaderHeight={ROW_HEIGHT}
      rowHeight={ROW_HEIGHT}
      rowRenderer={renderRow}
    />
  );
};

export default MySectionList;
