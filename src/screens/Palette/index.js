import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

export default function Palette({ route, navigation }) {
  const { name, author, colors } = route.params;
  const luminosity = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  var ncol, size;

  if (colors.length <= 4) {
    ncol = 2;
    size = 165;
  } else if (colors.length <= 9) {
    ncol = 3;
    size = 110;
  } else {
    ncol = 4;
    size = 82.5;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name.toUpperCase()}</Text>
      <Text style={styles.author}>by {author}</Text>
      <View style={styles.centralized}>
        <FlatList
          style={styles.border}
          data={colors}
          numColumns={ncol}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <View
              style={[
                styles.centralized,
                {
                  backgroundColor: item.item,
                  width: size,
                  height: size,
                },
              ]}
            >
              <Text
                style={
                  luminosity(item.item) > 186
                    ? styles.hexBlack
                    : styles.hexWhite
                }
              >
                {item.item}
              </Text>
            </View>
          )}
          keyExtractor={(item) => colors.indexOf(item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    gap: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  author: {
    fontSize: 20,
  },
  centralized: {
    justifyContent: "center",
    alignItems: "center",
  },
  hexWhite: {
    color: "#ffffff",
  },
  hexBlack: {
    color: "#000000",
  },
  border: {
    borderWidth: 3,
    backgroundColor: "#000000",
  },
});
