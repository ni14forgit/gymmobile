import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../navigation/TopHeader";
import BottomHeader from "../../navigation/BottomHeader";
import { useSelector } from "react-redux";

const MainTemplate = (props) => {
  const backButtonExists = useSelector((state) => state.navigation.isBack);

  const routes = props.routes;
  const renderScene = props.renderScene;

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader backButtonExists={backButtonExists} title="Progress" />
      {/* <BottomHeader routesData={} renderSceneData /> */}
      <BottomHeader routes={routes} renderScene={renderScene} />
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MainTemplate;
