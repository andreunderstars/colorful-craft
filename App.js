import React from "react";
import PaletteList from "./src/screens/paletteList";
import Palette from "./src/screens/palette";
import NewPalette from "./src/screens/newPalette";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const bg = "#C6AACF";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewPalette">
        <Stack.Screen
          name="Colorful Craft"
          component={PaletteList}
          options={{
            headerStyle: { backgroundColor: bg },
          }}
        />
        <Stack.Screen
          name="PalettePage"
          component={Palette}
          options={{ title: "", headerStyle: { backgroundColor: bg } }}
        />
        <Stack.Screen
          name="NewPalette"
          component={NewPalette}
          options={{
            title: "New Palette",
            headerStyle: { backgroundColor: bg },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
