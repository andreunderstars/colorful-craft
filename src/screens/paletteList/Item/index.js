import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function Item({ name, author }) {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.name}>{name.toUpperCase()}</Text>
          <Text style={styles.user}>{author}</Text>
        </View>
        <View style={styles.rectangle}></View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  texts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: 336,
  },
  name: { fontWeight: "bold", fontSize: 24 },
  user: { fontSize: 15 },
  rectangle: {
    backgroundColor: "#BC9CC7",
    height: 90,
    width: 336,
  },
});
