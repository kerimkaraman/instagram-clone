import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import { users } from "../data";
import {
  Entypo,
  Ionicons,
  EvilIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import CommentModal from "./CommentModal";

export default function PostItem({ text, userId, postImg }) {
  const [user, setUser] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [commentHandler, setCommentHandler] = useState(false);
  let nickname;
  useEffect(() => {
    setUser(users.filter((user) => user.userId == userId));
  }, [userId]);

  return (
    <View style={{ flex: 1 }} className="m-4">
      {user.map((ud, index) => {
        nickname = ud.nickname;
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
          {postImg.map((img, index) => {
            return (
              <Image
                key={index}
                className="w-[100%] h-[300px] object-contain"
                source={{ uri: img }}
              />
            );
          })}
        </Swiper>
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-x-5 items-center">
            <TouchableOpacity
              className="items-center justify-center"
              onPress={() => {
                setIsLiked(!isLiked);
              }}
            >
              <Ionicons
                name={isLiked ? "heart" : "md-heart-outline"}
                size={32}
                color={isLiked ? "red" : "black"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCommentHandler(!commentHandler);
              }}
            >
              <FontAwesome name="comment-o" size={28} color="black" />
            </TouchableOpacity>
            <Feather name="send" size={28} color="black" />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setIsSaved(!isSaved);
              }}
            >
              <Ionicons
                name={isSaved ? "bookmark" : "bookmark-outline"}
                size={28}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-3">
          <View className="">
            <Text className="flex-row gap-x-2 font-bold">
              {nickname}{" "}
              <Text className="font-normal flex-1 flex-wrap">{text}</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
