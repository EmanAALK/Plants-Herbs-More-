import { decorate, observable } from "mobx";

//Stores
import instance from "./instance";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const res = await instance.get("/vendors");
      this.vendors = res.data;
      this.loading = false;
    } catch (error) {
      console.error("VendorStore -> fetchVendor -> error", error);
    }
  };

  getVendorById = (vendorId) =>
    this.vendors.find((vendor) => vendor.id === vendorId);

  createVendor = async (newVendor, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await instance.post(`/vendors/${vendorId}/vendors`, formData);
      this.vendors.push(res.data);
      vendor.vendors.push({ id: res.data.id });
    } catch (error) {
      console.error("VendorStore -> createVendor -> error", error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await instance.delete(`/vendors/${vendorId}`);
      this.vendors = this.vendors.filter((vendor) => vendor.id !== vendorId);
    } catch (error) {
      console.error("VendorStore -> deleteVendor -> error", error);
    }
  };

  updateVendor = async (updatedVendor, newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      await instance.put(`/vendors/${updatedVendor.id}`, updatedVendor);
      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in vendor) vendor[key] = updatedVendor[key];
    } catch (error) {
      console.log("VendorStore -> updateVendor -> error", error);
    }
  };
}

decorate(VendorStore, { vendors: observable, loading: observable });

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
