import React from "react";
import PaletteList from "./src/screens/paletteList";
import Palette from "./src/screens/Palette";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PaletteList} />
        <Stack.Screen
          name="PalettePage"
          component={Palette}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
