import { decorate, observable } from "mobx";
import axios from "axios";

class PlantStore {
  plants = [];
  loading = false;

  fetchPlants = async () => {
    try {
      const res = await axios.get("http://localhost:8000/plants");
      this.plants = res.data;
      this.loading = true;
    } catch (error) {
      console.error("PlantStore -> fetchPlant -> error", error);
    }
  };

  createPlant = async (newPlant) => {
    try {
      const formData = new FormData();
      for (const key in newPlant) formData.append(key, newPlant[key]);
      const res = await axios.post("http://localhost:8000/plants", formData);
      this.plants.push(res.data);
    } catch (error) {
      console.error("PlantStore -> createPlant -> error", error);
    }
  };

  deletePlant = async (plantId) => {
    try {
      await axios.delete(`http://localhost:8000/plants/${plantId}`);
      this.plants = this.plants.filter((plant) => plant.id !== plantId);
    } catch (error) {
      console.error("PlantStore -> deletePlant -> error", error);
    }
  };

  updatePlant = async (updatedPlant, newPlant) => {
    try {
      const formData = new FormData();
      for (const key in newPlant) formData.append(key, newPlant[key]);
      await axios.put(
        `http://localhost:8000/plants/${updatedPlant.id}`,
        updatedPlant
      );
      const plant = this.plants.find((plant) => plant.id === updatedPlant.id);
      for (const key in plant) plant[key] = updatedPlant[key];
    } catch (error) {
      console.log("PlantStore -> updatePlant -> error", error);
    }
  };
}

decorate(PlantStore, { plants: observable });

const plantStore = new PlantStore();
plantStore.fetchPlants();
export default plantStore;
