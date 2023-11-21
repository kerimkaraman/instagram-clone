import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function StoryItem() {
  return (
    <View className="justify-center items-center gap-y-2 p-2">
      <LinearGradient
        className="w-[70px] h-[70px] rounded-full flex items-center justify-center"
        colors={[
          "#405de6",
          "#5851db",
          "#833ab4",
          "#e1306c",
          "#c13584",
          "#fd1d1d",
        ]}
      >
        <Image
          className="w-[65px] h-[65px] object-cover rounded-full"
          source={require("../assets/pfp.png")}
        />
      </LinearGradient>
      <Text className="text-xs">kerimkaraman28</Text>
    </View>
  );
}
