import React, { useState } from "react";
import { Route, Switch } from "react-router";

//Components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PlantList from "./components/PlantList";
import PlantDetail from "./components/PlantDetail";

//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle, NavItem } from "./styles";
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
  const [_plants, setPlants] = useState(plants);
  const [value, setValue] = useState("light");

  const deletePlant = (plantId) => {
    const updatedPlant = _plants.filter((plant) => plant.id !== +plantId);
    setPlants(updatedPlant);
    // setPlant(null);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <GlobalStyle />
      <Switch>
        <Route path="/plants/:plantSlug">
          <PlantDetail plants={_plants} deletePlant={deletePlant} />
        </Route>
        <Route path="/plants">
          <PlantList plants={_plants} deletePlant={deletePlant} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
