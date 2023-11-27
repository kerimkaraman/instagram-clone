import { View, Text } from "react-native";
import React from "react";
import ReelsIcon from "../assets/svg/ReelsIcon";

export default function ProfileReels() {
  return (
    <View className="flex-col flex-1 bg-white items-center justify-center mt-20 gap-y-10">
      <View className="p-4 border rounded-full">
        <ReelsIcon />
      </View>
      <Text>There are no posts that is reels.</Text>
    </View>
  );
}
