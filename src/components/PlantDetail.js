import React from "react";

//styles
import { DetailWrapper, DeleteButtonStyled } from "../styles";

const PlantDetail = (props) => {
  const plant = props.plant;

  const handleDelete = () => {
    props.deletePlant(plant.id);
  };
  return (
    <DetailWrapper>
      <h2>plant.name</h2>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.description}</p>
      <p>{plant.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default PlantDetail;
