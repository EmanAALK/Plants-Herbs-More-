import React, { useState } from "react";

//Components
import PlantList from "./components/PlantList";
import PlantDetail from "./components/PlantDetail";

//Styles
import { ThemeProvider } from "styled-components";
import {
  ThemeButton,
  GlobalStyle,
  Title,
  Description,
  ShopImg,
} from "./styles";
import plants from "./plants";

const theme = {
  light: {
    mainColor: "#2f3a18",
    backgroundColor: "#F6F9F1",
    gold: "rgb(197, 166, 91)",
    red: "#ff3232",
  },

  dark: {
    mainColor: "#f9ffed",
    backgroundColor: "#2f3a18",
    gold: "rgb(197, 166, 91)",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [plant, setPlant] = useState(null);
  const [_plants, setPlants] = useState(plants);

  const selectPlant = (plantId) => {
    const selectedPlant = _plants.find((plant) => plant.id === plantId);
    setPlant(selectedPlant);
  };

  const deletePlant = (plantId) => {
    const updatedPlant = _plants.filter((plant) => plant.id !== +plantId);
    setPlants(updatedPlant);
    setPlant(null);
  };

  const setView = () => {
    if (plant) return <PlantDetail plant={plant} deletePlant={deletePlant} />;
    return (
      <PlantList
        plants={_plants}
        selectPlant={selectPlant}
        deletePlant={deletePlant}
      />
    );
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title>Palnts, Herbs & More</Title>
        <Description>Live a Natural Life</Description>;
        <ShopImg
          src="https://i.pinimg.com/564x/4b/d5/10/4bd510040f679abeec83d155a1b618b0.jpg"
          alt="Store Photo"
        />
      </div>

      {setView()}
    </ThemeProvider>
  );
}

export default App;
