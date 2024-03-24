import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import Item from "./Item";

const palettes = [
  {
    id: 1,
    name: "hilda",
    author: "unfamiliarghost",
    colors: [
      { id: 0, color: "#0a002e" },
      { id: 1, color: "#6bc1c1" },
      { id: 2, color: "#8a78bf" },
      { id: 3, color: "#e07452" },
      { id: 4, color: "#ba2944" },
      { id: 5, color: "#ffe1c9" },
      { id: 6, color: "#cf957a" },
      { id: 7, color: "#ffc78a" },
      { id: 8, color: "#ffffff" },
    ],
  },
  {
    id: 2,
    name: "miku",
    author: "user1234",
    colors: [
      { id: 0, color: "#1e014b" },
      { id: 1, color: "#78478e" },
      { id: 2, color: "#58e1c3" },
      { id: 3, color: "#ffdaff" },
    ],
  },
  {
    id: 3,
    name: "light & dark",
    author: "Luis Miguel Maldonado",
    colors: [
      { id: 0, color: "#0d2b45" },
      { id: 1, color: "#203c56" },
      { id: 2, color: "#544e68" },
      { id: 3, color: "#8d697a" },
      { id: 4, color: "#d08159" },
      { id: 5, color: "#ffaa5e" },
      { id: 6, color: "#ffd4a3" },
      { id: 7, color: "#ffecd6" },
    ],
  },
  {
    id: 4,
    name: "sage57",
    author: "strawbrysage",
    colors: [
      { id: 0, color: "#040519" },
      { id: 1, color: "#432547" },
      { id: 2, color: "#604c7d" },
      { id: 3, color: "#908cc7" },
      { id: 4, color: "#b0cfee" },
      { id: 5, color: "#ffffff" },
      { id: 6, color: "#f5b554" },
      { id: 7, color: "#d58141" },
      { id: 8, color: "#ac4c3f" },
      { id: 9, color: "#732c40" },
      { id: 10, color: "#4e1a34" },
      { id: 11, color: "#6c0c5e" },
      { id: 12, color: "#9d1952" },
      { id: 13, color: "#f36150" },
      { id: 14, color: "#ef8277" },
      { id: 15, color: "#ffae71" },
      { id: 16, color: "#fff2c4" },
      { id: 17, color: "#fabc94" },
      { id: 18, color: "#fd8e82" },
      { id: 19, color: "#ff5b5f" },
      { id: 20, color: "#ea2a53" },
      { id: 21, color: "#b90e4a" },
      { id: 22, color: "#850950" },
      { id: 23, color: "#4b0843" },
      { id: 24, color: "#e82337" },
      { id: 25, color: "#fa6735" },
      { id: 26, color: "#ff9d3e" },
      { id: 27, color: "#fff57a" },
      { id: 28, color: "#8de35d" },
      { id: 29, color: "#2cc94e" },
      { id: 30, color: "#0b9d5f" },
      { id: 31, color: "#0a6e65" },
      { id: 32, color: "#10325b" },
      { id: 33, color: "#0b1646" },
      { id: 34, color: "#164a67" },
      { id: 35, color: "#237c8a" },
      { id: 36, color: "#3db2ad" },
      { id: 37, color: "#5be5c0" },
      { id: 38, color: "#b8fff0" },
      { id: 39, color: "#5adbfa" },
      { id: 40, color: "#4c89ee" },
      { id: 41, color: "#4837c7" },
      { id: 42, color: "#3d1b83" },
      { id: 43, color: "#370950" },
      { id: 44, color: "#691d8c" },
      { id: 45, color: "#9e2cab" },
      { id: 46, color: "#d747bc" },
      { id: 47, color: "#ff74be" },
      { id: 49, color: "#ffc1d4" },
      { id: 50, color: "#ff7eac" },
      { id: 51, color: "#d75192" },
      { id: 52, color: "#a4318e" },
      { id: 53, color: "#6b1f7a" },
    ],
  },
  {
    id: 5,
    name: "twilight 5",
    author: "Star",
    colors: [
      { id: 0, color: "#fbbbad" },
      { id: 1, color: "#ee8695" },
      { id: 2, color: "#4a7a96" },
      { id: 3, color: "#333f58" },
      { id: 4, color: "#292831" },
    ],
  },
];

export default function PaletteList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        {/* <View style={styles.header}></View> */}
        <FlatList
          data={palettes}
          renderItem={(item) => (
            <Item
              name={item.item.name}
              author={item.item.author}
              colors={item.item.colors}
              navigation={navigation}
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
