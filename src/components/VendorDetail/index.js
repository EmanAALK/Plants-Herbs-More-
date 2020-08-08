import React from "react";

//Buttons
import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

//Styles
import DetailWrapper from "./styles";
import plantStore from "../../stores/plantStore";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );
  const plants = vendor.plants.map((plant) =>
    plantStore.getPlantById(plant.id).filter((plant) => plant)
  );
  return (
    <div className='row'>
      <div className='container'>
        <DetailWrapper className='col-12'>
          <h4>{vendor.name}</h4>
          <img src={vendor.image} />
          <UpdateButton vendor={vendor} />
        </DetailWrapper>
      </div>
      <div className='col-12'>
        <PlantList plants={plants} />
        <AddButton vendor={vendor} />
        <DeleteButton vendorId={vendor.id} />
      </div>
    </div>
  );
};

export default VendorDetail;
