import { View, Text } from "react-native";
import React from "react";

export default function CommentItem({ text }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
