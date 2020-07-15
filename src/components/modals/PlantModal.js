import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import plantStore from "../../stores/plantStore";

//Styles
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PlantModel = ({ isOpen, closeModal, oldPlant }) => {
  const [plant, setPlant] = useState(
    oldPlant ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    plantStore[oldPlant ? "updatePlant" : "createPlant"](plant);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Pant Modal"
    >
      <h3>New Plant</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={plant.name}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              // required
              name="price"
              type="number"
              min="1"
              onChange={handleChange}
              className="form-control"
              value={plant.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            // required
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={plant.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            // required
            name="image"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={plant.image}
          />
        </div>
        <CreateButtonStyled>
          {oldPlant ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default PlantModel;