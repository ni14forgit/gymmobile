import React from "react";
import { View, StyleSheet } from "react-native";
import UserInput from "../../components/Input/UserInput";

const Account = () => {
  return (
    <View style={styles.container}>
      <UserInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default Account;
