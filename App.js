import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Test from "./Test";

import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import navigationReducer from "./store/reducers/navigation";
import progressReducer from "./store/reducers/progress";
import { Provider } from "react-redux";
import toastReducer from "./store/reducers/toast";

const fetchFonts = () => {
  return Font.loadAsync({
    "redhattext-bold": require("./assets/fonts/RedHatText-Bold.ttf"),
    "redhattext-medium": require("./assets/fonts/RedHatText-Medium.ttf"),
    "redhattext-regular": require("./assets/fonts/RedHatText-Regular.ttf"),
  });
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
  progress: progressReducer,
  toast: toastReducer,
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
