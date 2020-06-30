import React from "react";

//Components
import PlantList from "./components/PlantList";

//Styles
import styles from "./styles";
import { Title, Description, ShopImg} from "./styles";

function App() {
  // mapping method

  return (
    <div>
      <Title>Palnts, Herb & More</Title>
      <Description>Live a Natural Life</Description>;
      <ShopImg
        src="https://i.pinimg.com/564x/4b/d5/10/4bd510040f679abeec83d155a1b618b0.jpg"
        alt="Store Photo"
      />
      <PlantList />
    </div>
  );
}

export default App;
