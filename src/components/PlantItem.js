import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

//Styles
import { PlantWrapper } from "../styles";

const PlantItem = ({ plant, deletePlant }) => {
  return (
    <PlantWrapper>
      <Link to={`/plants/${plant.slug}`}>
        <img src={plant.image} alt={plant.name} />
      </Link>
      <p>{plant.name}</p>
      <p class="plant-price">{plant.price} KD</p>
      <UpdateButton plant={plant} />
      <DeleteButton plantId={plant.id} deletePlant={deletePlant} />
    </PlantWrapper>
  );
};
export default observer(PlantItem);
