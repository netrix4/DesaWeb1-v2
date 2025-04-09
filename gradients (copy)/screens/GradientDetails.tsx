import { useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

// @expo/vector-icons/Ioicons

export default function GradientDetails({ route }) {
  const gradientParams = route.params;
  console.log(gradientParams);
  // const params = useLocalSearchParams();
  // console.log(params);

  if (!gradientParams.color || !gradientParams.name) {
    const navigation = useNavigation();
    navigation.navigate("NotFound");
  }

  // const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      {/* <Stack.Screen options={{ title: gradientParams.name }} /> */}
      <View style={styles.detailsContainer}>
        <LinearGradient
          colors={gradientParams.color}
          style={styles.gradientSection}
        >
          <View style={styles.contentContainer}>
            <View style={styles.textsContainer}>
              <Text>{gradientParams.name}</Text>
              <Text>
                {gradientParams.color.map((colorCode) => `${colorCode} `)}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-forward"
                  size={40}
                  color={"white"}
                ></Ionicons>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back"
                  size={40}
                  color={"white"}
                ></Ionicons>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-down"
                  size={40}
                  color={"white"}
                ></Ionicons>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-up"
                  size={40}
                  color={"white"}
                ></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 100 : 0,
  },
  gradientSection: {
    width: "100%",
    height: "100%",
  },
  textsContainer: {
    paddingVertical: "15%",
  },
  buttonContainer: {
    width: "70%",
    marginHorizontal: "10%",
    marginVertical: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  texts: {
    color: "black",
  },
});
