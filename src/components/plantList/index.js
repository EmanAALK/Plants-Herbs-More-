import React, { useState } from "react";
import { observer } from "mobx-react";

//Component
import PlantItem from "./PlantItem";
import SearchBar from "../searchBar/SearchBar";
import AddButton from "../buttons/AddButton";

//Stores
import plantStore from "../../stores/plantStore";

//Styles
import { ListWrapper } from "./styles";
import { PlusCircle } from "../buttons/styles";

const PlantList = ({ deletePlant, selectPlant }) => {
  const [query, setQuery] = useState("");

  const plantList = plantStore.plants
    .filter((plant) => plant.name.toLowerCase().includes(query.toLowerCase()))
    .map((plant) => (
      <PlantItem
        plant={plant}
        key={plant.id}
        deletePlant={deletePlant}
        selectPlant={selectPlant}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{plantList}</ListWrapper>
      <PlusCircle>
        <AddButton />
      </PlusCircle>
    </>
  );
};

export default observer(PlantList);
