import React from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

//Buttons
import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

//Components
import PlantList from "../plantList/index";

//Stores
import plantStore from "../../stores/plantStore";
import vendorStore from "../../stores/vendorStore";

//Styles
// import DetailWrapper from "./styles";

const VendorDetail = () => {
  const { vendorSlug } = useParams();

  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );

  if (!vendor) return <Redirect to='/vendors' />;

  const plants = vendor.plants
    .map((plant) => plantStore.getPlantById(plant.id))
    .filter((plant) => plant);

  return (
    <div className='row'>
      <div className='container'>
        <div className='col-12'>
          <h4>{vendor.name}</h4>
          <img src={vendor.image} alt={vendor.name} />
          <UpdateButton vendor={vendor} />
          <DeleteButton vendorId={vendor.id} />
        </div>
      </div>
      <div className='col-12'>
        <PlantList plants={plants} />
        <AddButton vendor={vendor} />
      </div>
    </div>
  );
};

export default observer(VendorDetail);
