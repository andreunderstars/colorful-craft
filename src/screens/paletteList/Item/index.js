import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Colors from "./Colors";

export default function Item({ name, author, colors }) {
  const oversized = colors.length > 24;
  const firstLine = colors.slice(0, colors.length / 3);
  const secondLine = colors.slice(
    colors.length / 3 + 1,
    (2 * colors.length) / 3
  );
  const thirdLine = colors.slice((2 * colors.length) / 3 + 1, colors.length);
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.name}>{name.toUpperCase()}</Text>
          <Text style={styles.user}>{author}</Text>
        </View>
        <View style={styles.rectangle}>
          <View style={styles.colorDisplay}>
            {!oversized && <Colors colors={colors} />}
            {oversized && <Colors colors={firstLine} />}
            {oversized && <Colors colors={secondLine} />}
            {oversized && <Colors colors={thirdLine} />}
          </View>
        </View>
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
    flex: 1,
    backgroundColor: "#000000",
    height: 90,
    width: 336,
  },
  colorDisplay: {
    flex: 1,
    padding: 3,
  },
});
