import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

//Components
import Home from "../../home/Home";
import PlantDetail from "../plantDetail/index";
import PlantList from "../plantList/index";
import VendorDetail from "../VendorDetail/index";
import VendorList from "../VendorList/index";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

//Stores
import plantStore from "../../stores/plantStore";

const Routes = () => {
  return (
    <Switch>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/vendors/:vendorSlug'>
        <VendorDetail />
      </Route>
      <Route path='/vendors'>
        <VendorList />
      </Route>
      <Route path='/plants/:plantSlug'>
        <PlantDetail />
      </Route>
      <Route path='/plants'>
        <PlantList plants={plantStore.plants} />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
