import React from "react";
import { Route, Switch } from "react-router";

//Components
import Home from "../../home/Home";
import PlantDetail from "../plantDetail/index";
import PlantList from "../plantList/index";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path='/vendors/:vendorSlug'>
        <VendorDetail />
        </Route>
        <Route path='/vendors'>
        <VendorList />
      </Route> */}
      <Route path='/plants/:plantSlug'>
        <PlantDetail />
      </Route>
      <Route path='/plants'>
        <PlantList />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
