import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../components/Navigation/TopHeader";
import BottomHeader from "../../components/Navigation/BottomHeader";
import { useSelector } from "react-redux";

const MainTemplate = (props) => {
  const backButtonExists = useSelector((state) => state.navigation.isBack);

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader backButtonExists={backButtonExists} title="Progress" />
      {/* <BottomHeader routesData={} renderSceneData /> */}
      <BottomHeader />
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MainTemplate;
