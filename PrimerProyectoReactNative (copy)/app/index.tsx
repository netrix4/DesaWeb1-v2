import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";
import GradientDetails from "@/screens/GradientDetails";
import Home from "@/screens/Home";

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationIndependentTree>
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="NavItem" component={ItemScroll} /> */}
        <Stack.Screen name="GradientDetails" component={GradientDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    // </NavigationIndependentTree>
    // <SafeAreaView>
    //   <Home></Home>
    // </SafeAreaView>
  );
}
