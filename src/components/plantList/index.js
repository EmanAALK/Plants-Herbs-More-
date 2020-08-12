import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

//Component
import PlantItem from "./PlantItem";
import SearchBar from "../searchBar/SearchBar";

//Stores
import authStore from "../../stores/authStore";

//Styles
import { ListWrapper } from "./styles";

const PlantList = ({ plants = [] }) => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to='/' />;

  const plantList = plants
    .filter((plant) => plant.name.toLowerCase().includes(query.toLowerCase()))
    .map((plant) => <PlantItem plant={plant} key={plant.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{plantList}</ListWrapper>
    </>
  );
};

export default observer(PlantList);
