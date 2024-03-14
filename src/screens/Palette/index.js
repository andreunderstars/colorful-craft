import React from "react";
import { Text } from "react-native";

export default function Palette({ route, navigation }) {
  const { name, author } = route.params;
  return (
    <>
      <Text>Name: {JSON.stringify(name)}</Text>
      <Text>Author: {JSON.stringify(author)}</Text>
    </>
  );
}
