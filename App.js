import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Homepage from "./screens/Homepage";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="black"
        barStyle={{
          backgroundColor: "#fff",
          height: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color="black"
                />
              );
            },
          }}
          name="Home"
          component={Homepage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  size={24}
                  color="black"
                />
              );
            },
          }}
          name="Search"
          component={Homepage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons name="add-circle-outline" size={24} color="black" />
              );
            },
          }}
          name="Post"
          component={Homepage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name="md-play-circle-outline"
                  size={24}
                  color="black"
                />
              );
            },
          }}
          name="Reels"
          component={Homepage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  className="rounded-full"
                  style={{
                    borderColor: focused ? "black" : "none",
                    borderWidth: focused ? 2 : 0,
                  }}
                >
                  <Image
                    className="w-[24px] h-[24px] object-cover rounded-full"
                    source={require("./assets/pfp.png")}
                  />
                </View>
                /*  */
              );
            },
          }}
          name="UserProfile"
          component={Homepage}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
