import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import StoryItem from "../components/StoryItem";

export default function Homepage() {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </ScrollView>
    </SafeAreaView>
  );
}
