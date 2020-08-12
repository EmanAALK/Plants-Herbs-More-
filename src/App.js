//To The Future Eman
/*
Dear Eman,
Few years later you will read this letter or message & I wonder how your emotions will be 
&how you will be doing when you read it!
It's Wednesday, August 12, 2020 2:03PM. 
I just had my afternoon coffee & I'm working in my code now. 
The idea of writing this message to you popped into my mind yesterdays night while I was trying to sleep.
I'm full of so many emotions that I'm not sure if I'm  able to exactly mention! 
Do you remember how you joined this bootcamp? 
When you had a completely different
When your BF Noura sent you the message? how you felt back then, and how you refused joining at the begging?
Right now, I've so many to right to you however, I'm running out of time. 
I've many features to finish before 4:00PM, so to be continued ..!

Warm Wishes, 
The Younger Eman.

*/

import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import Routes from "./components/Routes/index";
import NavBar from "./components/navBar/NavBar";

//Stores
import vendorStore from "./stores/vendorStore";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import {
  Description,
  Footer,
  GlobalStyle,
  Header,
  ThemeButton,
  Title,
} from "./styles";
import plantStore from "./stores/plantStore";

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
        {vendorStore.loading || plantStore.loading ? (
          <h1>Loading</h1>
        ) : (
          <Routes />
        )}
      </Header>
      <GlobalStyle />
      <Footer className='footer'>
        <h5>© 2020 Eman AL-Kandari </h5>
      </Footer>
    </ThemeProvider>
  );
}

export default observer(App);
