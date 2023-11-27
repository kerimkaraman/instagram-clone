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
import { EvilIcons } from "@expo/vector-icons";
import { users } from "../data";

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
              <View key={userId} className="flex-col items-center">
                <Image
                  className="w-[64px] h-[64px] rounded-full"
                  source={{ uri: profile_img }}
                />
                <Text className="text-[10px] text-center">{namesurname}</Text>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
