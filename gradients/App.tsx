// import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";
import GradientDetails from "./screens/GradientDetails";
import Home from "./screens/Home";
import NotFound from "./screens/+not-found";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerBlurEffect: "dark",
            headerTransparent: Platform.select({
              ios: true,
              web: true,
              android: false,
            }),
            headerTintColor: Platform.select({
              ios: "white",
              web: "white",
              android: "dark",
            }),
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="GradientDetails" component={GradientDetails} />
          <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
