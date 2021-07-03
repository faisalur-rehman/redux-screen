import React, { useEffect, useCallback } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Home.css";
import ResizePanel from "react-resize-panel";
import HomeFooter from "../HomeFooter/HomeFooter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "../../Places/Places";
import { useResizeDetector } from "react-resize-detector";

const Home = ({ setDisplayNone }) => {
  const onResize = useCallback(() => {}, []);

  const { height, ref } = useResizeDetector({
    refreshRate: 1000,
    onResize,
  });
  useEffect(() => {
    if (height > 150) {
      setDisplayNone(true);
    } else {
      setDisplayNone(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  return (
    <Router>
      <div className="home">
        <HomeHeader />
        <Switch>
          <Route exact path="/">
            <ResizePanel direction="s">
              <div className="home-panel" ref={ref}>
                <h1>Home Panel</h1>
              </div>
            </ResizePanel>
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
};

export default Home;
