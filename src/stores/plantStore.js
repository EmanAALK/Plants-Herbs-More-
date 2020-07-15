import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//Data
import plants from "../plants";

class PlantStore {
  plants = plants;

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
export default plantStore;
