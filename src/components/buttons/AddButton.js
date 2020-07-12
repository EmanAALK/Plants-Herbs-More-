import React, { useState } from "react";

//Components
import PlantModal from "../modals/PlantModal";

//Styles
import { BsPlusCircle } from "react-icons/bs";
import PlusCircle from "../../styles";

const AddButton = ({ createPlant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      {/* <PlusCircle> */}
      <BsPlusCircle onClick={openModal} />
      {/* </PlusCircle> */}
      <PlantModal
        isOpen={isOpen}
        closeModal={closeModal}
        createPlant={createPlant}
      />
    </>
  );
};

export default AddButton;
