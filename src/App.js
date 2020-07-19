import React, { useState } from "react";
import { Route, Switch } from "react-router";

//Components
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import PlantDetail from "./components/plantDetail/index";
import PlantList from "./components/plantList/index";

//Styles
import AddButton from "./components/buttons/AddButton";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

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
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <GlobalStyle />
      <Switch>
        <Route path="/plants/:plantSlug">
          <PlantDetail />
        </Route>
        <Route path="/plants">
          <PlantList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <AddButton />
    </ThemeProvider>
  );
}

export default App;
