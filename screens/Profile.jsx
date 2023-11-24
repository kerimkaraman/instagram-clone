import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import AddPost from "../assets/svg/AddPost";
import ProfileDetailItem from "../components/ProfileDetailItem";
import ProfileTabs from "./ProfileTabs";

export default function Profile({ route }) {
  const { isUser } = route.params;

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row items-center justify-between px-4">
        <Text className="font-semibold text-2xl">
          {isUser ? "kerimkaraman" : null}
        </Text>
        <View className="flex-row items-center gap-x-5">
          <AddPost />
          <View className="flex-col gap-y-1.5">
            <View className="w-[20px] h-[2px] bg-black"></View>
            <View className="w-[20px] h-[2px] bg-black"></View>
            <View className="w-[20px] h-[2px] bg-black"></View>
          </View>
        </View>
      </View>
      <View className="mt-5 px-2 flex-row items-center justify-between">
        <View className="flex-col gap-y-2 items-center">
          <Image
            className="w-[64px] h-[64px] object-cover rounded-full"
            source={isUser ? require("../assets/pfp.png") : null}
          />
          <Text className="text-xs font-semibold">
            {isUser ? "Kerim Karaman" : null}
          </Text>
        </View>
        <View className="flex-row gap-x-5">
          <ProfileDetailItem text="Posts" number={2} />
          <ProfileDetailItem text="Followers" number="1,881" />
          <ProfileDetailItem text="Following" number="1" />
        </View>
      </View>
      {isUser ? (
        <View className="flex-row justify-center gap-2 mt-4">
          <Pressable className="bg-[#efefef] px-12 py-1 rounded-lg">
            <Text>Edit Profile</Text>
          </Pressable>
          <Pressable className="bg-[#efefef] px-12 py-1 rounded-lg">
            <Text>Share Profile</Text>
          </Pressable>
        </View>
      ) : null}
      <ProfileTabs />
    </SafeAreaView>
  );
}
