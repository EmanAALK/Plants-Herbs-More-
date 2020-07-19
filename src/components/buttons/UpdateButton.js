import React, { useState } from "react";

// Components
import PlantModal from "../modals/PlantModal";

// Styling
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ plant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <PlantModal isOpen={isOpen} closeModal={closeModal} oldPlant={plant} />
    </>
  );
};

export default UpdateButton;
