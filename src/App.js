import React from "react";
import "./App.css";
import VerticalSidebar from "./components/VerticalSidebar/VerticalSidebar";
import Places from "./components/Places/Places";
import Home from "./components/HomePanel/Home/Home";

function App() {
  return (
    <div className="app">
      <VerticalSidebar />
      <Places />
      <Home />
      <div className="schedule-panel">
        <h1>Schedule Panel</h1>
      </div>
    </div>
  );
}

export default App;
