import GradientItem from "../components/GradientItem";
import {
  StyleSheet,
  Platform,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import { gradients } from "../data/grandient";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        {gradients.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((gradient, gradientIndex) => (
              <GradientItem
                colors={gradient.colors}
                gradientName={gradient.name}
                key={gradientIndex}
              ></GradientItem>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
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
