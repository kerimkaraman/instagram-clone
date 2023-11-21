import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function StoryItem() {
  return (
    <LinearGradient
      className="w-[50px] h-[50px] rounded-full"
      colors={[
        "#405de6",
        "#5851db",
        "#833ab4",
        "#e1306c",
        "#c13584",
        "#fd1d1d",
      ]}
    ></LinearGradient>
  );
}
