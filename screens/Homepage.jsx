import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import StoryItem from "../components/StoryItem";
import { posts } from "../data";
import PostItem from "../components/PostItem";

export default function Homepage() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
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
        <StoryItem key={Math.random() * 10} />
        <StoryItem key={Math.random() * 10} />
        <StoryItem key={Math.random() * 10} />
        <StoryItem key={Math.random() * 10} />
        <StoryItem key={Math.random() * 10} />
        <StoryItem key={Math.random() * 10} />
        <StoryItem key={Math.random() * 10} />
      </ScrollView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={(itemData) => {
          return (
            <PostItem
              text={itemData.item.postDesc}
              userId={itemData.item.userId}
              postImg={itemData.item.postImg}
            />
          );
        }}
        keyExtractor={(item) => {
          return item.postId;
        }}
      />
    </SafeAreaView>
  );
}
