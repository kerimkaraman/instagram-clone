import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import StoryItem from "../components/StoryItem";
import { posts, users } from "../data";
import PostItem from "../components/PostItem";
import TextLogo from "../assets/svg/TextLogo";
import HeartIcon from "../assets/svg/HeartIcon";
import MessageIcon from "../assets/svg/MessageIcon";
import CommentModal from "../components/CommentModal";

export default function Homepage() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <ScrollView>
        <View className="px-4 flex-row justify-between items-center">
          <TextLogo />
          <View className="flex-row gap-x-5 items-center">
            <HeartIcon fillColor="white" />
            <MessageIcon />
          </View>
        </View>
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
                likeCount={itemData.item.likeCount}
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
