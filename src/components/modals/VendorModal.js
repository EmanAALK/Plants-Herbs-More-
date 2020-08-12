import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import vendorStore from "../../stores/vendorStore";

//Styles
import { CreateButtonStyled } from "../../styles";
import { customStyles } from "./styles";

const VendorModel = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newVendor = { ...vendor, [event.target.name]: event.target.value };
    setVendor(newVendor);
  };

  const handelImage = (event) =>
    setVendor({ ...vendor, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    vendorStore[oldVendor ? "updateVendor" : "createVendor"](vendor);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Shop Modal'
    >
      <h3>New Shop</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group row'>
          <div className='col-6'>
            <label>Name</label>
            <input
              required
              name='name'
              type='text'
              onChange={handleChange}
              className='form-control'
              value={vendor.name}
            />
          </div>
        </div>
        <div className='form-group'>
          <label>Image</label>
          <input
            name='image'
            type='file'
            onChange={handelImage}
            className='form-control'
          />
        </div>
        <CreateButtonStyled>
          {oldVendor ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default VendorModel;
