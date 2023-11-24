import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfilePosts from "./ProfilePosts";
import Posts from "../assets/svg/Posts";
import Tagged from "../assets/svg/TaggedIcon";
import ProfileTagged from "./ProfileTagged";

export default function ProfileTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator className="mt-5">
      <Tab.Screen
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
            return <Tagged />;
          },
        }}
        name="Near"
        component={ProfileTagged}
      />
    </Tab.Navigator>
  );
}
