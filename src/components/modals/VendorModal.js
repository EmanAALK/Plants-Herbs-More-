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

  const handelImage = (event) =>
    setPlant({ ...vendor, image: event.target.files[0] });

  const handleChange = (event) => {
    setPlant({ ...vendor, [event.target.name]: event.target.value });
  };

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
      contentLabel='Vendor Modal'
    >
      <h3>New Vendor</h3>
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
            // required
            name='image'
            type='file'
            onChange={handelImage}
            className='form-control'
            value={vendor.image}
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
