import React from "react";

//Stores
import plantStore from "../../stores/plantStore";
import vendorStore from "../../stores/vendorStore";

//Styles
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ vendorId, plantId }) => {
  const handleDelete = () => {
    if (vendorId) vendorStore.deleteVendor(vendorId);
    else plantStore.deletePlant(plantId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
