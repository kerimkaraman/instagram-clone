import { View, Text } from "react-native";
import React from "react";

export default function ProfileDetailItem({ text, number }) {
  return (
    <View className="flex-col items-center gap-y-1 mx-5">
      <Text className="font-semibold text-lg">{number}</Text>
      <Text className="text-gray-600 text-xs">{text}</Text>
    </View>
  );
}
