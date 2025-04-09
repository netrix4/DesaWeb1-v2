import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  interface ITabBarIcon {
    title: string;
    iconName: any;
    focused: boolean;
  }
  const TabBarIcon = ({ title, iconName, focused }: ITabBarIcon) => {
    if (!focused) {
      return (
        <View className="flex flex-row flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden">
          <Ionicons name={iconName} size={20} color="#a8b5db" />
          <Text className="color-white">{title}</Text>
        </View>
      );
    }
    return (
      <View className="flex flex-row min-w-[112px] justify-center items-center bg-secondary mt-4 min-h-16 rounded-full overflow-hidden">
        <Ionicons name={iconName} size={20} color={"white"} />
        <Text className="text-white">{title}</Text>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          color: "white",
          width: "100%",
          height: "100%",
          justifycontent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 35,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }: ITabBarIcon) => (
            <TabBarIcon title="Home" iconName="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }: ITabBarIcon) => (
            <TabBarIcon title="Search" iconName="search" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused }: ITabBarIcon) => (
            <TabBarIcon title="Favorites" iconName="heart" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }: ITabBarIcon) => (
            <TabBarIcon
              title="Profile"
              iconName="logo-android"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
