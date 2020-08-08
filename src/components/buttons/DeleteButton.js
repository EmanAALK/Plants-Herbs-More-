import React from "react";

//Stores
import plantStore from "../../stores/plantStore";
import vendorStore from "../../stores/vendorStore";

//Styles
import { DeleteButtonStyled } from "./styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
      history.pushState("/vendors");
    } else {
      plantStore.deletePlant(props.plantId);
      history.pushState("/plants");
    }
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
