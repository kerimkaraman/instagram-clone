import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfilePosts from "./ProfilePosts";
import Posts from "../assets/svg/Posts";
import Tagged from "../assets/svg/TaggedIcon";
import ProfileTagged from "./ProfileTagged";
import ReelsIcon from "../assets/svg/ReelsIcon";
import ProfileReels from "./ProfileReels";

export default function ProfileTabs({ isUser, userId }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      className="mt-5"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 1,
        },
      }}
    >
      <Tab.Screen
        initialParams={{ isUser: isUser, userId: userId }}
        options={{
          title: () => {
            return <Posts />;
          },
        }}
        name="Posts"
        component={ProfilePosts}
      />
      <Tab.Screen
        options={{
          title: () => {
            return <ReelsIcon />;
          },
        }}
        name="Reels"
        component={ProfileReels}
      />
      <Tab.Screen
        initialParams={{ isUser: isUser }}
        options={{
          title: () => {
            return <Tagged />;
          },
        }}
        name="Near"
        component={ProfileTagged}
      />
    </Tab.Navigator>
  );
}
