import React, { useState } from "react";

// Components
import PlantModal from "../modals/PlantModal";
import VendorModal from "../modals/VendorModal";

// Styling
import { UpdateButtonStyled } from "./styles";
import VendorModel from "../modals/VendorModal";

const UpdateButton = ({ plant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {vendor ? (
        <VendorModel
          sOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      ) : (
        <PlantModal isOpen={isOpen} closeModal={closeModal} oldPlant={plant} />
      )}
    </>
  );
};

export default UpdateButton;
