import React, { useState } from "react";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

//Component
import AddButton from "../buttons/AddButton";
import VendorItem from "./VendorItem";
import SearchBar from "../searchBar/SearchBar";

//Stores
import authStore from "../../stores/authStore";
import vendorStore from "../../stores/vendorStore";

//Styles
import { ListWrapper } from "./styles";

const VendorList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to='/' />;

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);
  return (
    <div className='container'>
      <h1>Shops</h1>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{vendorList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
