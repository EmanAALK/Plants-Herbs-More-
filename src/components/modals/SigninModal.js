import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import authStore from "../../stores/authStore";

//Styles
import { AuthButtonStyled } from "../../components/Buttons/styles";
import { customStyles } from "./styles";

const SigninModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
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
        <AuthButtonStyled>Sign in</AuthButtonStyled>
      </form>
    </Modal>
  );
};

export default SigninModal;
