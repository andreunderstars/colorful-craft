import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

export default function Item({ name, author, colors }) {
  const oversized = colors.length > 32;
  const firstHalf = colors.slice(0, colors.length / 3);
  const secondHalf = colors.slice(
    colors.length / 3 + 1,
    (2 * colors.length) / 3
  );
  const thirdHalf = colors.slice((2 * colors.length) / 3 + 1, colors.length);
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.name}>{name.toUpperCase()}</Text>
          <Text style={styles.user}>{author}</Text>
        </View>
        <View style={styles.rectangle}>
          <View style={styles.colorDisplay}>
            {!oversized && (
              <FlatList
                style={styles.colorRow}
                data={colors}
                renderItem={(item) => (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: item.item,
                      width: 330 / colors.length,
                    }}
                  ></View>
                )}
              />
            )}
            {oversized && (
              <FlatList
                style={styles.colorRow}
                data={firstHalf}
                renderItem={(item) => (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: item.item,
                      width: 330 / firstHalf.length,
                    }}
                  ></View>
                )}
              />
            )}
            {oversized && (
              <FlatList
                style={styles.colorRow}
                data={secondHalf}
                renderItem={(item) => (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: item.item,
                      width: 330 / secondHalf.length,
                    }}
                  ></View>
                )}
              />
            )}
            {oversized && (
              <FlatList
                style={styles.colorRow}
                data={thirdHalf}
                renderItem={(item) => (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: item.item,
                      width: 330 / thirdHalf.length,
                    }}
                  ></View>
                )}
              />
            )}
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
  colorRow: {
    flex: 1,
    flexDirection: "row",
  },
  color: {
    width: 50,
    height: 85,
  },
});
