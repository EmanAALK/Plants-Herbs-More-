import React, {useState} from "react";

//Components
import PlantList from "./components/PlantList";

//Styles
import { ThemeProvider } from "styled-components";
import {ThemeButton, GlobalStyle, Title, Description, ShopImg } from "./styles";

const theme = {
 light:{
  mainColor: "#2f3a18",
  backgroundColor: "#F6F9F1",
  gold: "rgb(197, 166, 91)",


 },

 dark:{
   mainColor: "#f9ffed",
   backgroundColor: "#2f3a18",
   gold: "rgb(197, 166, 91)",
   
    },

  };



function App() {

  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (

    <ThemeProvider theme={theme[currentTheme]}>

      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
      <div>
        <Title>Palnts, Herbs & More</Title>
        <Description>Live a Natural Life</Description>;
        <ShopImg
          src="https://i.pinimg.com/564x/4b/d5/10/4bd510040f679abeec83d155a1b618b0.jpg"
          alt="Store Photo"
        />
        <PlantList />
      </div>
    </ThemeProvider>
  );
}

export default App;
