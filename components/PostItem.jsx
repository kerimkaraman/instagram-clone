import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { users } from "../data";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

export default function PostItem({ text, userId, postImg }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(users.filter((user) => user.userId == userId));
  }, [userId]);

  return (
    <View className="p-2 my-4">
      {user.map((ud, index) => {
        return (
          <View
            className="flex flex-row items-center justify-between"
            id={index}
          >
            <View className="flex flex-row items-center gap-2">
              <Image
                className="w-[32px] h-[32px] rounded-full object-cover"
                source={{ uri: ud.profile_img }}
              />
              <Text>{ud.nickname}</Text>
            </View>
            <View>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>
        );
      })}
      <View>
        <Swiper className="h-[300px] my-2">
          {postImg.map((img) => {
            return (
              <Image
                className="w-full h-[300px] object-contain"
                source={{ uri: img }}
              />
            );
          })}
        </Swiper>
        <View></View>
        <View>
          <Text>{text ? text : null}</Text>
        </View>
      </View>
    </View>
  );
}
