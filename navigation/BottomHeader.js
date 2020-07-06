import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SeeNavigator from "../screens/Progress/See/SeeNavigator";
import TrackNavigator from "../screens/Progress/Track/TrackNavigator";
import { Color, FontType } from "../assets/Constants";

const Tab = createMaterialTopTabNavigator();

function MyTabs({ DATA }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: FontType.bold,
          fontSize: FontType.tabnavigator,
          textTransform: "none",
        },
        inactiveTintColor: Color.grey,
        activeTintColor: Color.blue,
        indicatorStyle: {
          backgroundColor: Color.blue,
          height: 5,
        },
      }}
    >
      {/* <Tab.Screen name="Track" component={TrackNavigator} />
      <Tab.Screen name="View" component={SeeNavigator} /> */}
      {DATA.map((val) => {
        return <Tab.Screen name={val.title} component={val.screen} />;
      })}
    </Tab.Navigator>
  );
}

export default MyTabs;
