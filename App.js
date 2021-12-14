import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BasicDetails from "./components/BasicDetails";
import Summary from "./components/Summary";
import Essentials from "./components/Essentials";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BasicDetails />
      <div className="Container">
        <div className="item">
          <Summary />
        </div>
        <div className="item">
          <Essentials />
        </div>
      </div>
    </div>
  );
}

export default App;
