import React from "react";
import "./App.css";
import "normalize.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="app--container">
      <Navbar />
      <div className="app--cardsContainer">{cards}</div>
    </div>
  );
}

export default App;
