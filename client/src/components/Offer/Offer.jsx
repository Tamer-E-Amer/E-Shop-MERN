/**
 * @description offer componenet that appears in blue ubber of the nav bar
 */
import React from "react";
//css
import "../../assets/css/Offer/offer.css";
const Offer = (props) => {
  console.log(props);
  return <div className="app__offer">{props.staticData.upperOffer}</div>;
};

export default Offer;
