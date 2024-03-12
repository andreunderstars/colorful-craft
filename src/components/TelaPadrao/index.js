import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}></View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#abcdef",
  },
  header: {
    width: 40,
    height: 80,
    color: "#000000",
  },
});
