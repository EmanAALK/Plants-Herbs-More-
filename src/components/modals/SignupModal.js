import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import authStore from "../../stores/authStore";

//Styles
import { AuthButtonStyled } from "../../components/Buttons/styles";
import { customStyles } from "./styles";

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Pant Modal'
    >
      <h3>New User</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input
            required
            name='username'
            type='text'
            onChange={handleChange}
            className='form-control'
            value={user.username}
          />
        </div>
        <div className='form-group row'>
          <div className='col-6'>
            <label>First Name</label>
            <input
              name='firstName'
              type='text'
              onChange={handleChange}
              className='form-control'
              value={user.firstName}
            />
          </div>
          <div className='col-6'>
            <label>Last Name</label>
            <input
              name='lastName'
              type='text'
              onChange={handleChange}
              className='form-control'
              value={user.lastName}
            />
          </div>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            name='email'
            type='text'
            onChange={handleChange}
            className='form-control'
            value={user.email}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            required
            name='password'
            type='text'
            onChange={handleChange}
            className='form-control'
            value={user.password}
          />
        </div>

        <>
          <AuthButtonStyled>Sign up</AuthButtonStyled>
        </>
      </form>
    </Modal>
  );
};

export default SignupModal;
