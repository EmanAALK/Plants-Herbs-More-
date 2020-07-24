import React, { useState } from "react";
import { Route, Switch } from "react-router";

//Components
import Home from "./home/Home";
import NavBar from "./components/navBar/NavBar";
import PlantDetail from "./components/plantDetail/index";
import PlantList from "./components/plantList/index";

//Styles
import {
  Description,
  Footer,
  GlobalStyle,
  Header,
  ThemeButton,
  Title,
} from "./styles";

import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#2f3a18",
    backgroundColor: "#F6F9F1",
    gold: "rgb(197, 166, 91)",
    red: "#ff3232",
    footerBackground: "#FFFFFF",
    footerText: "#000000",
  },

  dark: {
    mainColor: "#f9ffed",
    backgroundColor: "#2f3a18",
    gold: "rgb(197, 166, 91)",
    red: "#ff3232",
    footerBackground: "#000000",
    footerText: "#FFFFFF",
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
      <Header>
        <ThemeButton className='nav-item' onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
        <Title>Plants, Herbs & More</Title>
        <Description>Live a Natural Life</Description>
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </Header>
      <GlobalStyle />
      <Switch>
        <Route path='/plants/:plantSlug'>
          <PlantDetail />
        </Route>
        <Route path='/plants'>
          <PlantList />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer className='footer'>
        <h5>© 2020 Eman AL-Kandari </h5>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
