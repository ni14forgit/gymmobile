import React, { useState } from "react";
import Intro from "./screens/Intro";

// import Spirit from "./models/Spirit";
import KnowYou from "./screens/KnowYou";
import GoalsChar from "./screens/Setup/GoalsChar";
import Activities from "./screens/Setup/Activities";
import GatherInfo from "./screens/Setup/GatherInfo";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import SupportSystem from "./screens/Spirit/SupportSystem";
import Progress from "./screens/Spirit/Progress";

const fetchFonts = () => {
  return Font.loadAsync({
    "redhattext-bold": require("./assets/fonts/RedHatText-Bold.ttf"),
    "redhattext-medium": require("./assets/fonts/RedHatText-Medium.ttf"),
    "redhattext-regular": require("./assets/fonts/RedHatText-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <Activities />;
}
