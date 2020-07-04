import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Color, FontType } from "../assets/Constants";
import ModifiableText from "../components/Text/ModifiableText";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
// );

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: Color.blue, height: 5 }}
    inactiveColor={Color.grey}
    activeColor={Color.blue}
    style={{ backgroundColor: "transparent" }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{ color, marginTop: 8, fontFamily: FontType.bold, fontSize: 20 }}
      >
        {route.title}
      </Text>
    )}
  />
);

export default function TabViewExample(props) {
  const [index, setIndex] = React.useState(0);

  //   const [routes] = React.useState([
  //     { key: "first", title: "First" },
  //     { key: "second", title: "Second" },
  //   ]);

  //   const renderScene = SceneMap({
  //     first: FirstRoute,
  //     second: SecondRoute,
  //   });

  const [routes] = React.useState(props.routes);
  const renderScene = SceneMap(props.renderScene);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
