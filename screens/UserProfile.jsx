import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { users } from "../data";
import { Entypo } from "@expo/vector-icons";
import ProfileDetailItem from "../components/ProfileDetailItem";
import ProfileTabs from "./ProfileTabs";

export default function UserProfile({ route }) {
  const { userId } = route.params;
  const [user, setUser] = useState([]);
  const nav = useNavigation();
  useEffect(() => {
    setUser(users.filter((user) => user.userId == userId));
  }, [userId]);

  return user != null ? (
    user.map((ud) => {
      const { nickname, namesurname, profile_img, userId } = ud;
      return (
        <SafeAreaView className="bg-white" style={{ flex: 1 }} key={userId}>
          <View className="flex-row items-center justify-between px-5">
            <View className="flex-row items-center gap-x-7">
              <Pressable
                onPress={() => {
                  nav.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
              <Text className="font-semibold text-lg">{nickname}</Text>
            </View>
            <View>
              <Entypo name="dots-three-vertical" size={18} color="black" />
            </View>
          </View>
          <View className="flex-row items-center justify-between px-3 mt-8">
            <View className="items-center justify-center gap-y-2">
              <Image
                className="w-[64px] h-[64px] rounded-full"
                source={{ uri: profile_img }}
              />
              <Text className="text-xs font-medium">{namesurname}</Text>
            </View>
            <View className="flex-row">
              <ProfileDetailItem text="Posts" number={2} />
              <ProfileDetailItem text="Followers" number="1,881" />
              <ProfileDetailItem text="Following" number="1" />
            </View>
          </View>
          <View className="px-3 flex-col">
            <Text className="text-xs text-gray-500">Famous Person</Text>
            <Text className="text-xs">This is my biography text</Text>
          </View>
          <View className="flex-row px-3 mt-3 justify-center gap-x-5">
            <Pressable className="px-14 py-1 bg-[#d9d9d9] rounded-md">
              <Text className="text-xs font-medium">Following</Text>
            </Pressable>
            <Pressable className="px-14 py-1 bg-[#d9d9d9] rounded-md">
              <Text className="text-xs font-medium">Message</Text>
            </Pressable>
          </View>
          <View style={{ flex: 1 }}>
            <ProfileTabs userId={userId} />
          </View>
        </SafeAreaView>
      );
    })
  ) : (
    <Text>Cannot get user data</Text>
  );
}
