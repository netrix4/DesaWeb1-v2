import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

interface IGradientProp {
  colors: [string, string] | [string, string, string];
  gradientName: String;
}

export default function NotFound() {
  return (
    <View>
      <Text>Route Not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
  },
});
