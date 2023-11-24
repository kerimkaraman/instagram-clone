import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function AddComment() {
  return (
    <View className="flex-row gap-x-2 my-1">
      <Image
        className="w-[24px] h-[24px] rounded-full"
        source={require("../assets/pfp.png")}
      />
      <TextInput placeholder="Add a comment..." className="text-xs" />
    </View>
  );
}
