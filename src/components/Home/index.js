import React from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

//Stores
import authStore from "../../stores/authStore";

//Styles
import { ShopImg } from "./styles";

const Home = () => {
  if (!authStore.user) return <Redirect to='/signin' />;

  return (
    <>
      <ShopImg
        src='https://i.pinimg.com/564x/4b/d5/10/4bd510040f679abeec83d155a1b618b0.jpg'
        alt='Store Image'
      />
    </>
  );
};

export default observer(Home);
