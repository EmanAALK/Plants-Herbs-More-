import { decorate, observable } from "mobx";

//Stores
import instance from "./instance";

class PlantStore {
  plants = [];
  loading = true;

  fetchPlants = async () => {
    try {
      const res = await instance.get("/plants");
      this.plants = res.data;
      this.loading = false;
    } catch (error) {
      console.error("PlantStore -> fetchPlant -> error", error);
    }
  };

  getPlantById = (plantId) => this.plants.find((plant) => plant.id === plantId);

  createPlant = async (newPlant, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newPlant) formData.append(key, newPlant[key]);
      const res = await instance.post(`/vendors/${vendor.id}/plants`, formData);

      const plant = res.data;
      this.plants.push(plant);
      vendor.plants.push(plant);
    } catch (error) {
      console.error("PlantStore -> createPlant -> error", error);
    }
  };

  deletePlant = async (plantId) => {
    try {
      await instance.delete(`/plants/${plantId}`);
      this.plants = this.plants.filter((plant) => plant.id !== plantId);
    } catch (error) {
      console.error("PlantStore -> deletePlant -> error", error);
    }
  };

  updatePlant = async (updatedPlant, newPlant) => {
    try {
      const formData = new FormData();
      for (const key in newPlant) formData.append(key, updatedPlant[key]);
      await instance.put(`/plants/${updatedPlant.id}`, formData);
      const plant = this.plants.find((plant) => plant.id === updatedPlant.id);
      for (const key in updatedPlant) plant[key] = updatedPlant[key];
      plant.image = URL.createObjectURL(updatedPlant.image);
    } catch (error) {
      console.log("PlantStore -> updatePlant -> error", error);
    }
  };
}

decorate(PlantStore, { plants: observable, loading: observable });

const plantStore = new PlantStore();
plantStore.fetchPlants();
export default plantStore;
