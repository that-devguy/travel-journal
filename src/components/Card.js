import React from "react";
import MapPin from "../images/map-pin.png";

function Card(props) {
  return (
  <section className="card--container">
    <img className="card--photo" src={props.imageUrl} alt={props.title} />
    <div className="card--locationContainer">
        <img className="card--mapPin" src={MapPin} alt="Map pin icon" />
        <h2 className="card--location">{props.location.toUpperCase()}</h2>
        <a className="card--googleMap" href={props.googleMapsUrl}>View on Google Maps</a>
    </div>
    <h1 className="card--title">{props.title}</h1>
    <p className="card--dates">{props.startDate} - {props.endDate}</p>
    <p className="card--description">{props.description}</p>
  </section>
  )
  ;
}

export default Card;
