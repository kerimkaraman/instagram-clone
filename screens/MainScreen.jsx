import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text, Image } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";
import Homepage from "./Homepage";
import Search from "./Search";
import Profile from "./Profile";
import HomeIcon from "../assets/svg/HomeIcon";
import SearchIcon from "../assets/svg/SearchIcon";
import AddPost from "../assets/svg/AddPost";
import ReelsIcon from "../assets/svg/ReelsIcon";

export default function MainScreen() {
  const Tab = createMaterialBottomTabNavigator();
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
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
            return <HomeIcon fillColor={focused ? "black" : "white"} />;
          },
        }}
        name="Home"
        component={Homepage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <SearchIcon strokeWidth={focused ? 3 : 2} />;
          },
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <AddPost />;
          },
        }}
        name="Post"
        component={Homepage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <ReelsIcon />;
          },
        }}
        name="Reels"
        component={Homepage}
      />
      <Tab.Screen
        initialParams={{ isUser: true }}
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
                  source={require("../assets/pfp.png")}
                />
              </View>
            );
          },
        }}
        name="UserProfile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

/*  */
