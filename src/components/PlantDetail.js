import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

//styles
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const PlantDetail = ({ plants, deletePlant }) => {
  const { plantSlug } = useParams();
  const plant = plants.find((plant) => plant.slug === plantSlug);
  if (!plant) return <Redirect to="/plants" />;
  return (
    <DetailWrapper>
      <Link to="/plants">
        <p>Back to Plants</p>
      </Link>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.description}</p>
      <p>{plant.price} KD </p>
      <DeleteButton plantId={plant.id} deletePlant={deletePlant} />
    </DetailWrapper>
  );
};

export default PlantDetail;
