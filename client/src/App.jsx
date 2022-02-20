import React from "react";
// components
import { Offer, Navbar } from "./components";
// containers
// statuc data
import { siteWordList } from "./data/siteWords.js";
//css
import "./app.css";

const App = () => {
  return (
    <div>
      <Offer staticData={siteWordList} />
      <Navbar />
    </div>
  );
};

export default App;
