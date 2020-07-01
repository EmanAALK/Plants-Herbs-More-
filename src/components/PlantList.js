import React, { useState } from "react";

//Component
import PlantItem from "./PlantItem";
//Data
import plants from "../plants";

//Styles
import { ListWrapper } from "../styles";

const PlantList = () => {
  const [_plants, setPlants] = useState(plants);
  const deletePlant = (plantId) => {
    const updatePlants = _plants.filter((plant) => plant.id !== +plantId);
    setPlants(updatePlants);
  };

  const plantsList = _plants.map((plant) => (
    <PlantItem plant={plant} deletePlant={deletePlant} key={plant.id} />
  ));

  return <ListWrapper>{plantsList}</ListWrapper>;
};

export default PlantList;
