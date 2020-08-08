import { decorate, observable } from "mobx";
import axios from "axios";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const res = await axios.get("http://localhost:8000/vendors");
      this.vendors = res.data;
      this.loading = false;
    } catch (error) {
      console.error("VendorStore -> fetchVendor -> error", error);
    }
  };
}

decorate(VendorStore, { vendors: observable, loading: observable });

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
