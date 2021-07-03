import React from "react";
import "./App.css";
import VerticalSidebar from "./components/VerticalSidebar/VerticalSidebar";
import Places from "./components/Places/Places";
import Home from "./components/HomePanel/Home/Home";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <div className="none">
          <VerticalSidebar />
          <Places />
        </div>
        <Home />

        <div className="schedule-panel none">
          <h1>Schedule Panel</h1>
        </div>
      </Provider>
    </div>
  );
}

export default App;
