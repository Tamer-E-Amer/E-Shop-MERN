import React from "react";
// components
import { Offer } from "./components";
// containers
// statuc data
import { siteWordList } from "./data/siteWords.js";
//css
import "./app.css";
const App = () => {
  return (
    <div>
      <Offer staticData={siteWordList} />
    </div>
  );
};

export default App;
