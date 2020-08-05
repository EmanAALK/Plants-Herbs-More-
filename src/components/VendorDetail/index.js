import React from "react";

import DetailWrapper from "./styles";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );
  return (
    <DetailWrapper>
      <h4>{vendor.name}</h4>
      <img src={vendor.image} />
    </DetailWrapper>
  );
};

export default VendorDetail;
