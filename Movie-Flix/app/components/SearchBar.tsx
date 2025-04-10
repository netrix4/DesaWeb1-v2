import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View className="flex-1 flex-row h-auto justify-center items-center bg-secondary my-96 px-40 rounded-3xl">
      <Ionicons name="search-sharp" size={25} color={"white"}></Ionicons>
      <TextInput
        className="flex-row w-96 bg-secondary color-white text-xl"
        placeholder="Search"
        placeholderTextColor={"white"}
        textAlign="center"
      >
        {/* <Text className="color-slate-50 bg-black">Search...</Text> */}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({});
