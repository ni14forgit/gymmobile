import * as React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import MenuBar from "../components/Button/MenuButton";
import { Dimension, Color, FontType } from "../assets/Constants";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <MenuBar onPress={navigation.toggleDrawer} />
    </View>
  );
}

const Divider = () => {
  return <View style={styles.divider}></View>;
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <Divider />
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
      drawerContentOptions={{
        activeTintColor: Color.white,
        inactiveTintColor: Color.white,
        contentContainerStyle: {
          marginTop: 50,
          flexDirection: "column",
          alignItems: "center",
        },
        itemStyle: {
          height: 45,

          width: 175,
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          flex: 1,
          marginVertical: -2,
        },
        labelStyle: {
          fontFamily: FontType.medium,
          fontSize: 15,
        },
      }}
      drawerStyle={{
        backgroundColor: Color.blue,
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: -20,
        width: 175,
      }}
      screenOptions={{ swipeEnabled: false }}
    >
      <Drawer.Screen name="Progress" component={NotificationsScreen} />
      <Drawer.Screen name="Buddies" component={NotificationsScreen} />

      <Drawer.Screen name="Trainers" component={NotificationsScreen} />
      <Drawer.Screen name="Daily Check In" component={NotificationsScreen} />
      <Drawer.Screen name="Rewards" component={NotificationsScreen} />

      <Drawer.Screen name="Settings" component={NotificationsScreen} />
      <Drawer.Screen name="Log Out" component={NotificationsScreen} />
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
