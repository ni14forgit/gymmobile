import React, { useState } from "react";

// import Spirit from "./models/Spirit";

import { AppLoading } from "expo";
import * as Font from "expo-font";

import IntroNavigator from "./navigation/IntroNavigator";
import Drawer from "./navigation/Drawer";

import MainTemplate from "./screens/models/MainTemplate";
import BottomHeader from "./navigation/BottomHeader";

import Progress from "./screens/Progress/Progress";

import Test from "./Test";

import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import navigationReducer from "./store/reducers/navigation";
import { Provider } from "react-redux";
// import { createStackNavigator } from "@react-navigation/stack";

const fetchFonts = () => {
  return Font.loadAsync({
    "redhattext-bold": require("./assets/fonts/RedHatText-Bold.ttf"),
    "redhattext-medium": require("./assets/fonts/RedHatText-Medium.ttf"),
    "redhattext-regular": require("./assets/fonts/RedHatText-Regular.ttf"),
  });
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
});
const store = createStore(rootReducer);

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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Test />
      </NavigationContainer>
    </Provider>
  );
}
