import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import StoryItem from "../components/StoryItem";
import { posts, users } from "../data";
import PostItem from "../components/PostItem";

export default function Homepage() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <ScrollView>
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
          {users.map((user) => {
            const { profile_img, nickname } = user;
            return <StoryItem nickname={nickname} img={profile_img} />;
          })}
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
      </ScrollView>
    </SafeAreaView>
  );
}
