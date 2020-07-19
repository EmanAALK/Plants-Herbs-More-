import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class PlantStore {
  plants = [];

  fetchPlants = async () => {
    try {
      const res = await axios.get("http://localhost:8000/plants");
      this.plants = res.data;
    } catch (error) {
      console.error("CookieStore -> fetchCookies -> error", error);
    }
  };

  createPlant = (newPlant) => {
    newPlant.id = this.plants[this.plants.length - 1].id + 1;
    newPlant.slug = slugify(newPlant.name);
    this.plants.push(newPlant);
  };

  deletePlant = (plantId) => {
    this.plants = this.plants.filter((plant) => plant.id !== plantId);
  };

  updatePlant = (updatedPlant) => {
    console.log("plantStore -> updatePlant -> updatedPlant", updatedPlant);
    const plant = this.plants.find((plant) => plant.id === updatedPlant.id);
    for (const key in plant) plant[key] = updatedPlant[key];
  };
}

decorate(PlantStore, { plants: observable });

const plantStore = new PlantStore();
plantStore.fetchPlants();
export default plantStore;
