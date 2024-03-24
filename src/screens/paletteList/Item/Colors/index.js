import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

export default function Colors({ colors }) {
  return (
    <FlatList
      style={styles.colorRow}
      data={colors}
      renderItem={(item) => (
        <View
          style={{
            flex: 1,
            backgroundColor: item.item.color,
            width: 330 / colors.length,
          }}
        ></View>
      )}
      keyExtractor={({ id }) => String(id)}
    />
  );
}

const styles = StyleSheet.create({
  colorRow: {
    flex: 1,
    flexDirection: "row",
  },
});
