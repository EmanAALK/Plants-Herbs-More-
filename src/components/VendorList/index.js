import React, { useState } from "react";
import { observer } from "mobx-react";

//Component
import VendorItem from "./VendorItem";
import SearchBar from "../searchBar/SearchBar";
import AddButton from "../buttons/AddButton";

//Stores
import vendorStore from "../../stores/vendorStore";

//Styles
import { ListWrapper } from "./styles";
import { PlusCircle } from "../buttons/styles";

const VendorList = ({ deleteVendor, selectVendor }) => {
  const [query, setQuery] = useState("");

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => (
      <VendorItem
        vendor={vendor}
        key={vendor.id}
        deleteVendor={deleteVendor}
        selectVendor={selectVendor}
      />
    ));
  return (
    <>
      <h1>Vendors</h1>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{vendorList}</ListWrapper>
      <PlusCircle>
        <AddButton />
      </PlusCircle>
    </>
  );
};

export default observer(VendorList);
