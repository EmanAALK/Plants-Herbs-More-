import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

//Stors
import plantStore from "../stores/plantStore";

//styles
import { DetailWrapper } from "../styles";

const PlantDetail = () => {
  const { plantSlug } = useParams();
  const plant = plantStore.plants.find((plant) => plant.slug === plantSlug);
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
      <UpdateButton plant={plant} />
      <DeleteButton plantId={plant.id} />
    </DetailWrapper>
  );
};

export default observer(PlantDetail);
