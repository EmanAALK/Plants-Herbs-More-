import React, { useState } from "react";

//Components
import PlantModal from "../modals/PlantModal";
import VendorModel from "../modals/VendorModal";

//Styles
import { BsPlusCircle } from "react-icons/bs";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle onClick={openModal} />
      {vendorId ? (
        <PlantModal vendor={vendor} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <VendorModel isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;
