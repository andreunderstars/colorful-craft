import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Item from "./Item";

const palettes = [
  {
    id: 1,
    name: "hilda",
    author: "unfamiliarghost",
    colors: [
      "#0a002e",
      "#6bc1c1",
      "#8a78bf",
      "#e07452",
      "#ba2944",
      "#ffe1c9",
      "#cf957a",
      "#ffc78a",
      "#ffffff",
    ],
  },
  {
    id: 2,
    name: "miku",
    author: "user1234",
    colors: ["1e014b", "78478e", "58e1c3", "ffdaff"],
  },
];

export default function PaletteList() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}></View>
        <FlatList
          data={palettes}
          renderItem={(item) => (
            <Item name={item.item.name} author={item.item.author} />
          )}
          keyExtractor={({ id }) => String(id)}
        />
      </View>
    </SafeAreaView>
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
