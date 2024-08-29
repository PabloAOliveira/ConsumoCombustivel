import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/HomeScreen";
import ResultScreen from "./src/ResultScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Calculadora de Consumo" }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: "Resultado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
