import React from "react";

//Styles
import {PlantWrapper} from "../styles";

const PlantItem = (props) => {
  return (
      <PlantWrapper>         
      <img
        src={props.plant.image}
        alt={props.plant.name}
        />
      <p>{props.plant.name}</p>
      <p>{props.plant.price} KD</p>
        
      </PlantWrapper>
  
  );
};

export default PlantItem;
