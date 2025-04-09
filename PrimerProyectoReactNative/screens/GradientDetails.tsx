import GradientItem from "@/components/GradientItem";
import { StyleSheet, Platform, ScrollView, View } from "react-native";
import { gradients } from "@/grandient";

export default function GradientDetails() {
  return <View style={styles.row}></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 100 : 0,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
