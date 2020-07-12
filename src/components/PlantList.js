import React, { useState } from "react";

//Component
import PlantItem from "./PlantItem";
import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../styles";

const PlantList = ({ plants, deletePlant, selectPlant }) => {
  const [query, setQuery] = useState("");

  const plantList = plants
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
      <ListWrapper>{plantList}</ListWrapper>;
    </>
  );
};

export default PlantList;
