import { View, Text } from "react-native";
import React from "react";
import Tagged from "../assets/svg/TaggedIcon";

export default function ProfileTagged() {
  return (
    <View className="flex-col flex-1 bg-white items-center justify-center mt-20 gap-y-10">
      <View className="p-4 border rounded-full">
        <Tagged />
      </View>
      <Text>There are no posts that tagged.</Text>
    </View>
  );
}
