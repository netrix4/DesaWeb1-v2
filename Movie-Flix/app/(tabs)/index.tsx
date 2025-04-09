import { Image, ScrollView, Text, View } from "react-native";
import "@/app/globals.css";

const headerImage = require("@/assets/images/encabezado.jpg");
const logo = require("@/assets/images/logo.png");

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={headerImage} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={logo} className="w-24 h-28 mt-20 mx-auto" />
      </ScrollView>
    </View>
  );
}
