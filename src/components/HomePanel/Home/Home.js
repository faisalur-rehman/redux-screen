import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Home.css";
import ResizePanel from "react-resize-panel";
import HomeFooter from "../HomeFooter/HomeFooter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "../../Places/Places";

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
      <Router>
        <div className="home">
          <HomeHeader />
          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route path="/places">
              <Places />
            </Route>
          </Switch>
          <HomeFooter />
        </div>
      </Router>
    );
  }
}

export default Home;
