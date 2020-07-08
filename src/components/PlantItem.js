import React from "react";
import { Link } from "react-router-dom";

//Components
import DeleteButton from "./buttons/DeleteButton";

//Styles
import { PlantWrapper } from "../styles";

const PlantItem = (props) => {
  const plant = props.plant;

  return (
    <PlantWrapper>
      <Link to={`/plants/${plant.id}`}>
        <img src={plant.image} alt={plant.name} />
      </Link>
      <p>{plant.name}</p>
      <p class="plant-price">{props.plant.price} KD</p>
      <DeleteButton plantId={plant.id} deletePlant={props.deletePlant} />
    </PlantWrapper>
  );
};
export default PlantItem;
