import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Styles
import { VendorWrapper } from "./styles";

const VendorItem = ({ vendor, deleteVendor }) => {
  return (
    <VendorWrapper>
      <Link to={`/vendors/${vendor.slug}`}>
        <img src={vendor.image} alt={vendor.name} />
      </Link>
      <p>{vendor.name}</p>
      <UpdateButton vendor={vendor} />
      <DeleteButton vendorId={vendor.id} deleteVendor={deleteVendor} />
    </VendorWrapper>
  );
};
export default observer(VendorItem);
