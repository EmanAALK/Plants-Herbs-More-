import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import plantStore from "../../stores/plantStore";

//Styles
import { AuthButtonStyled } from "../../styles";
import { customStyles } from "./styles";

const SigninModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
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
      <h3>Sign in</h3>
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
          <SigninModal isOpen={isOpen} closeModal={closeModal} />
        </>
      </form>
    </Modal>
  );
};

export default SigninModel;
