import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../navigation/TopHeader";
import BottomHeader from "../../navigation/BottomHeader";
import { useSelector } from "react-redux";

const LessTemplate = (props) => {
  const backButtonExists = useSelector((state) => state.navigation.isBack);
  const backButtonFunction = useSelector(
    (state) => state.navigation.backFunction
  );
  const Screen = props.Screen;

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader
        backButtonExists={backButtonExists}
        backButtonFunction={backButtonFunction}
        onPressDrawer={props.onPressDrawer}
        title={props.title}
      />
      <Screen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default LessTemplate;
