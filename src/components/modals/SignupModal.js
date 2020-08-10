import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import plantStore from "../../stores/plantStore";

//Styles
import { AuthButtonStyled } from "../../styles";
import { customStyles } from "./styles";

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signup(user);
        closeModal();
    };
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Pant Modal'
    >
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input
            name='username'
            value={user.username}
            type='text'
            className='form-control'
            onChange={handleChange}
          />
        </div>
        <div className='form-group row'>
          <div className='col-6'>
            <label>First Name</label>
            <input
              name='firstName'
              value={user.firstName}
              type='text'
              className='form-control'
              onChange={handleChange}
            />
          </div>
          <div className='col-6'>
            <label>Last Name</label>
            <input
              name='lastName'
              value={user.lastName}
              type='text'
              className='form-control'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            name='email'
            value={user.email}
            type='text'
            className='form-control'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            name='password'
            value={user.password}
            type='text'
            className='form-control'
            onChange={handleChange}
          />
        </div>

        <>
          <AuthButtonStyled>Sign up</AuthButtonStyled>
          <SignupModal isOpen={isOpen} closeModal={closeModal} />
        </>
      </form>
    </Modal>
  );
};

export default SignupModel;
