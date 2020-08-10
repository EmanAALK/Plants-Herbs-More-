import React from "react";
import { useHistory } from "react-router-dom";

//Stores
import plantStore from "../../stores/plantStore";
import vendorStore from "../../stores/vendorStore";

//Styles
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ vendorId, plantId }) => {
  let history = useHistory;
  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
      history.pushState("/vendors");
    } else {
      plantStore.deletePlant(plantId);
      history.pushState("/plants");
    }
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
