import React, { useState } from "react";
import "./App.css";
import VerticalSidebar from "./components/VerticalSidebar/VerticalSidebar";
import Places from "./components/Places/Places";
import Home from "./components/HomePanel/Home/Home";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  const [displayNone, setDisplayNone] = useState(false);
  return (
    <div className="app">
      <Provider store={store}>
        {!displayNone && (
          <div className="none">
            <VerticalSidebar />
            <Places />
          </div>
        )}
        <Home setDisplayNone={setDisplayNone} />

        {!displayNone && (
          <div className="schedule-panel none">
            <h1>Schedule Panel</h1>
          </div>
        )}
      </Provider>
    </div>
  );
}

export default App;
