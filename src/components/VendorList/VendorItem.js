import React from "react";
import { Link } from "react-router-dom";

//Styles
import { VendorWrapper } from "../VendorItem/styles";

const VendorItem = ({ vendor }) => {
  return (
    <VendorWrapper>
      <Link to={`/vendors/${vendor.slug}`}>
        <img src={vendor.image} alt={vendor.name} />
      </Link>
      <p>{vendor.name}</p>
    </VendorWrapper>
  );
};
export default VendorItem;
