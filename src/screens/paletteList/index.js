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
    colors: ["#1e014b", "#78478e", "#58e1c3", "#ffdaff"],
  },
  {
    id: 3,
    name: "light & dark",
    author: "Luis Miguel Maldonado",
    colors: [
      "#0d2b45",
      "#203c56",
      "#544e68",
      "#8d697a",
      "#d08159",
      "#ffaa5e",
      "#ffd4a3",
      "#ffecd6",
    ],
  },
  {
    id: 4,
    name: "sage57",
    author: "strawbrysage",
    colors: [
      "#040519",
      "#432547",
      "#604c7d",
      "#908cc7",
      "#b0cfee",
      "#ffffff",
      "#f5b554",
      "#d58141",
      "#ac4c3f",
      "#732c40",
      "#4e1a34",
      "#6c0c5e",
      "#9d1952",
      "#f36150",
      "#ef8277",
      "#ffae71",
      "#fff2c4",
      "#fabc94",
      "#fd8e82",
      "#ff5b5f",
      "#ea2a53",
      "#b90e4a",
      "#850950",
      "#4b0843",
      "#e82337",
      "#fa6735",
      "#ff9d3e",
      "#fff57a",
      "#8de35d",
      "#2cc94e",
      "#0b9d5f",
      "#0a6e65",
      "#10325b",
      "#0b1646",
      "#164a67",
      "#237c8a",
      "#3db2ad",
      "#5be5c0",
      "#b8fff0",
      "#5adbfa",
      "#4c89ee",
      "#4837c7",
      "#3d1b83",
      "#370950",
      "#691d8c",
      "#9e2cab",
      "#d747bc",
      "#ff74be",
      "#ffc1d4",
      "#ff7eac",
      "#d75192",
      "#a4318e",
      "#6b1f7a",
    ],
  },
  {
    id: 5,
    name: "twilight 5",
    author: "Star",
    colors: ["#fbbbad", "#ee8695", "#4a7a96", "#333f58", "#292831"],
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
            <Item
              name={item.item.name}
              author={item.item.author}
              colors={item.item.colors}
            />
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
