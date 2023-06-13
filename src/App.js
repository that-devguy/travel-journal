import React from "react";
import "./App.css";
import "normalize.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import Divider from "./components/Divider";

function App() {
  const cards = data.map((item) => {
    return (
      <div>
        <Card {...item} />
        <Divider />
      </div>
    );
  });

  return (
    <div className="app--container">
      <Navbar />
      <div className="app--cardsContainer">{cards}</div>
    </div>
  );
}

export default App;
