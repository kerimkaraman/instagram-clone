import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import CallIcon from "../assets/svg/CallIcon";
import NewMessageIcon from "../assets/svg/NewMessageIcon";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { messageStatus, users } from "../data";

export default function MessagesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-row items-center justify-between p-4">
        <View className="flex-row items-center gap-x-6">
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Text className="font-semibold text-lg">kerimkaraman</Text>
        </View>
        <View className="flex-row items-center gap-x-6">
          <CallIcon />
          <NewMessageIcon />
        </View>
      </View>
      <ScrollView className="flex-1">
        <View className="bg-[#d9d9d9] flex-row items-center rounded-lg gap-x-5 py-2 mx-4 ">
          <EvilIcons name="search" size={16} color="gray" />
          <TextInput placeholder="Search" />
        </View>
        <ScrollView
          horizontal={true}
          className="py-5 px-2"
          contentContainerStyle={{ columnGap: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          {users.map((user) => {
            const { profile_img, namesurname, userId } = user;
            return (
              <View key={userId} className="flex-col items-center relative">
                <View>
                  <Image
                    className="w-[64px] h-[64px] rounded-full object-cover"
                    source={{ uri: profile_img }}
                  />
                  <View className="absolute w-[15px] h-[15px] bg-green-500 bottom-1 rounded-full border-2 border-white right-0"></View>
                </View>
                <Text className="text-[10px] text-center">{namesurname}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View className="px-2 flex-row items-center justify-between">
          <Text className="text-sm font-medium">Messages</Text>
          <Text className="text-[#0095f6] text-sm">Requests</Text>
        </View>
        <View>
          {users.map((user) => {
            const message = messageStatus[Math.floor(Math.random() * 7)];
            const { profile_img, nickname, userId } = user;
            return (
              <View
                key={userId}
                className="flex-row items-center justify-between px-4 py-2"
              >
                <View className="flex-row items-center gap-x-3">
                  <Image
                    className="w-[52px] h-[52px] rounded-full"
                    source={{ uri: profile_img }}
                  />
                  <View>
                    <Text className="text-xs font-medium">{nickname}</Text>
                    <Text className="text-xs text-gray-500">{message}</Text>
                  </View>
                </View>
                <Feather name="camera" size={18} color="black" />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
