import React from "react";
import HogTile from "./HogTile";

export default function HogList({ hogList }) {
  
  const pigpen = hogList.map((hog) => (
    <HogTile key={hog.name + hog.weight} hog={hog} />
  ));

  return <div className="ui grid container">{pigpen}</div>;
}
