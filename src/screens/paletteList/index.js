import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import TelaPadrao from "../../components/TelaPadrao";

export default function PaletteList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text>Colorful Craft!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "#BC9CC7",
    height: 80,
  },
});
