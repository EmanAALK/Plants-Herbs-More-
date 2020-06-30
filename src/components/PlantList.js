import React from "react";

//Component 
import PlantItem from "./PlantItem";
//Data
import plants from "../plants";

//Styles
import {ListWrapper} from "../styles"
const PlantList = () => {
  const plantsList = plants.map((plant) => <PlantItem plant={plant} key={plant.id}/> )

  return <ListWrapper>{plantsList}</ListWrapper>;
}

export default PlantList;
