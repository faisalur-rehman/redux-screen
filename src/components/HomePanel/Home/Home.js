import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Home.css";
import ResizePanel from "react-resize-panel";

class Home extends React.Component {
  state = {
    width: 200,
    height: 200,
  };

  // On top layout
  onResize = (event, { element, size, handle }) => {
    this.setState({ width: size.width, height: size.height });
  };

  render() {
    return (
      <div className="home">
        <HomeHeader />
        <div>
          <ResizePanel direction="s">
            <div className="home-panel">
              <h1>Home Panel</h1>
            </div>
          </ResizePanel>
        </div>
        <div className="map-panel">
          <h1>Map Panel</h1>
        </div>
      </div>
      // <ResizePanel direction="e">
      //   <div className="panel sidebar" style={{ width: "100%" }}>
      //     left panel
      //   </div>
      // </ResizePanel>
    );
  }
}

export default Home;
