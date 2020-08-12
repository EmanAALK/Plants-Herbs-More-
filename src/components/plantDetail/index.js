import React from "react";
import { observer } from "mobx-react";
import { Link, Redirect, useParams } from "react-router-dom";

//Components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Stores
import plantStore from "../../stores/plantStore";

//styles
import { DetailWrapper } from "./styles";

const PlantDetail = () => {
  const { plantSlug } = useParams();

  const plant = plantStore.plants.find((plant) => plant.slug === plantSlug);

  if (!plant) return <Redirect to='/plants' />;

  return (
    <>
      <Link to='/plants'>
        <p>Back to Plants</p>
      </Link>
      <DetailWrapper>
        <img src={plant.image} alt={plant.name} />
        <p>{plant.name}</p>
        <p>{plant.description}</p>
        <p>{plant.price} KD </p>
        <UpdateButton plant={plant} />
        <DeleteButton plantId={plant.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(PlantDetail);
