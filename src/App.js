import React from "react";
import "./App.css";
import VerticalSidebar from "./components/VerticalSidebar/VerticalSidebar";
import Places from "./components/Places/Places";

function App() {
  return (
    <div className="app">
      <VerticalSidebar />
      <Places />
    </div>
  );
}

export default App;
