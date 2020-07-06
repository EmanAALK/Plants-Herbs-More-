import React from "react";

//Component
import PlantItem from "./PlantItem";

//Styles
import { ListWrapper } from "../styles";

const PlantList = (props) => {
  const plantList = props.plants.map((plant) => (
    <PlantItem
      plant={plant}
      key={plant.id}
      deletePlant={props.deletePlant}
      selectPlant={props.selectPlant}
    />
  ));

  return <ListWrapper>{plantList}</ListWrapper>;
};

export default PlantList;
