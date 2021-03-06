import React, { useState } from "react";

// Components
import PlantModal from "../modals/PlantModal";
import VendorModal from "../modals/VendorModal";

// Styling
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ vendor, plant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {vendor ? (
        <VendorModal
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
