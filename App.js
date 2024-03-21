import React from "react";
import PaletteList from "./src/screens/paletteList";
import Palette from "./src/screens/palette";
import NewPalette from "./src/screens/newPalette";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Colorful Craft">
      <HomeStack.Screen
        name="Colorful Craft"
        component={PaletteList}
        options={{
          headerStyle: { backgroundColor: "#C6AACF" },
        }}
      />
      <HomeStack.Screen
        name="PalettePage"
        component={Palette}
        options={{ title: "", headerStyle: { backgroundColor: "#C6AACF" } }}
      />
    </HomeStack.Navigator>
  );
}

const NewPaletteStack = createNativeStackNavigator();

function NewPaletteStackScreen() {
  return (
    <NewPaletteStack.Navigator>
      <NewPaletteStack.Screen
        name="NewPalette"
        component={NewPalette}
        options={{
          title: "New Palette",
          headerStyle: { backgroundColor: "#C6AACF" },
        }}
      />
    </NewPaletteStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#C6AACF",
          tabBarActiveTintColor: "black",
          tabBarInactiveBackgroundColor: "white",
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { fontSize: 20, padding: 8 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ title: "HOME" }}
        />
        <Tab.Screen
          name="NewPalette"
          component={NewPaletteStackScreen}
          options={{ title: "NEW PALETTE" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const bg = "#C6AACF";

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Colorful Craft">
//         <Stack.Screen
//           name="Colorful Craft"
//           component={PaletteList}
//           options={{
//             headerStyle: { backgroundColor: bg },
//           }}
//         />
//         <Stack.Screen
//           name="PalettePage"
//           component={Palette}
//           options={{ title: "", headerStyle: { backgroundColor: bg } }}
//         />
//         <Stack.Screen
//           name="NewPalette"
//           component={NewPalette}
//           options={{
//             title: "New Palette",
//             headerStyle: { backgroundColor: bg },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
