import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Screens } from "../assets/Constants";
import { Color } from "../assets/Constants";

const Stack = createStackNavigator();

function StackModel({ SCREENS, InitialScreenName }) {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: Color.white } }}
      headerMode="none"
      initialRouteParams={InitialScreenName}
    >
      {SCREENS.map((ScreenData) => {
        // console.log(ScreenData);
        return (
          <Stack.Screen name={ScreenData.name} component={ScreenData.screen} />
        );
      })}
      {/* <Stack.Screen name="Account" component={Account} /> */}
    </Stack.Navigator>
  );
}

export default StackModel;
