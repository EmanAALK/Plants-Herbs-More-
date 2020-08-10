import React from "react";
import { Route, Switch } from "react-router";

//Components
import Home from "../../home/Home";
import PlantDetail from "../plantDetail/index";
import PlantList from "../plantList/index";
import VendorDetail from "../VendorDetail/index";
import VendorList from "../VendorList/index";

//Stores
import plantStore from "../../stores/plantStore";

const Routes = () => {
  return (
    <Switch>
      <Route path='/'>
        <Home />
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
    </Switch>
  );
};

export default Routes;
