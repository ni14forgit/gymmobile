import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import _ from "lodash";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Dimension, Color, FontType } from "../assets/Constants";
import Progress from "../screens/Progress/Progress";
import Buddies from "../screens/Buddies/Buddies";
import Trainers from "../screens/Trainers/Trainers";
import CheckIn from "../screens/CheckIn/CheckIn";
import Settings from "../screens/Settings/Settings";

const Divider = () => {
  return <View style={styles.divider}></View>;
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Title of App"
        style={{
          position: "relative",
          alignSelf: "center",
          flex: 1,
          marginBottom: 40,
          marginLeft: 50,
          width: "100%",
        }}
        labelStyle={{
          fontFamily: FontType.bold,
          fontSize: 17,
          color: Color.white,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MainNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Notifications"
      drawerPosition="right"
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      hideStatusBar="true"
      overlayColor="transparent"
      sceneContainerStyle={{ backgroundColor: Color.white }}
      drawerContentOptions={{
        activeTintColor: Color.white,
        inactiveTintColor: Color.white,
        contentContainerStyle: {
          marginTop: 50,
          flexDirection: "column",
          alignItems: "center",
        },
        itemStyle: {
          // height: 45,
          width: "100%",
          alignContent: "left",
          alignSelf: "left",
          justifyContent: "center",
          flexDirection: "column",
          marginVertical: 10,
          // borderColor: "red",
          // borderWidth: 2,
          // flex: 1,

          paddingHorizontal: 0,
          // marginVertical: -2,
        },
        labelStyle: {
          fontFamily: FontType.medium,
          fontSize: 17,
          // flex: 1,
          // borderColor: "red",
          // borderWidth: 2,
        },
      }}
      drawerStyle={{
        backgroundColor: Color.blue,
        flexDirection: "column",
        justifyContent: "center",
        // paddingLeft: -20,
        width: 160,
      }}
      screenOptions={{ swipeEnabled: false }}
    >
      <Drawer.Screen name="Progress" component={Progress} />
      <Drawer.Screen name="Buddies" component={Buddies} />
      <Drawer.Screen name="Trainers" component={Trainers} />
      <Drawer.Screen name="Check In" component={CheckIn} />
      {/* <Drawer.Screen name="Rewards" component={NotificationsScreen} /> */}
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  divider: {
    // backgroundColor: "#a5afc4",
    backgroundColor: "white",
    marginVertical: 10,
    opacity: 0.25,
    height: 5,
    width: 150,
    borderRadius: 4,
  },
});

const MyExport = () => {
  return <MainNavigation />;
};

export default MyExport;
