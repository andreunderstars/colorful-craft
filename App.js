import React from "react";
import PaletteList from "./src/screens/paletteList";
import Palette from "./src/screens/palette";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Colorful Craft"
          component={PaletteList}
          options={{
            headerStyle: { backgroundColor: "#BC9CC7" },
          }}
        />
        <Stack.Screen
          name="PalettePage"
          component={Palette}
          options={{ title: "", headerStyle: { backgroundColor: "#BC9CC7" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
