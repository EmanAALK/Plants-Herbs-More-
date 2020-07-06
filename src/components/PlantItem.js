import React from "react";

//Styles
import { PlantWrapper, DeleteButtonStyled } from "../styles";

const PlantItem = (props) => {
  const plant = props.plant;

  const handleDelete = () => {
    props.deletePlant(plant.id);
  };

  return (
    <PlantWrapper>
      <img
        src={plant.image}
        alt={plant.name}
        onClick={() => props.selectPlant(plant.id)}
      />
      <p>{plant.name}</p>
      <p class="plant-price">{props.plant.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </PlantWrapper>
  );
};

export default PlantItem;
