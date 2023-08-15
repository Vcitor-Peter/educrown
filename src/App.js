import React from "react";
import Hero from "./Components/Hero";
import CardList from "./Components/CardList";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <div className="card-list-wrapper">
        <CardList />
      </div>
    </div>
  );
}
