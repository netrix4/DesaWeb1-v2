import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

interface IGradientProp {
  colors: [string, string] | [string, string, string];
  gradientName: String;
}

export default function GradientItem({ colors, gradientName }: IGradientProp) {
  const navigation = useNavigation();
  return (
    <Link href={"./gradient-details"} asChild>
      <TouchableOpacity
        style={styles.colorContainer}
        onPress={() => {
          navigation.navigate("GradientDetails");
        }}
      >
        <LinearGradient colors={colors} style={styles.gradientSection}>
          <Text style={styles.gradientTitle}>{gradientName}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
  },
  gradientSection: {
    width: "100%",
    height: 250,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gradientTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
