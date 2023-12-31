import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { users } from "../data";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import HeartIcon from "../assets/svg/HeartIcon";
import SendIcon from "../assets/svg/SendIcon";
import CommentIcon from "../assets/svg/CommentIcon";
import SaveIcon from "../assets/svg/SaveIcon";
import AddComment from "./AddComment";
import { useDispatch } from "react-redux";
import { toggleCommentModal, toggleShareModal } from "../store/modal";
import { useNavigation } from "@react-navigation/native";

export default function PostItem({ text, userId, postImg, likeCount }) {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const [user, setUser] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  let nickname;
  useEffect(() => {
    setUser(users.filter((user) => user.userId == userId));
  }, [userId]);

  return (
    <View>
      <View style={{ flex: 1 }} className="my-2">
        {user.map((ud, index) => {
          nickname = ud.nickname;
          return (
            <View
              className="flex flex-row items-center justify-between px-2"
              key={index}
            >
              <View className="flex flex-row items-center gap-2">
                <Image
                  className="w-[32px] h-[32px] rounded-full object-cover"
                  source={{ uri: ud.profile_img }}
                />
                <Pressable
                  onPress={() => nav.navigate("Profile", { userId: userId })}
                >
                  <Text>{ud.nickname}</Text>
                </Pressable>
              </View>
              <View>
                <Entypo name="dots-three-vertical" size={14} color="black" />
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
          <View className="flex-row justify-between items-center px-2">
            <View className="flex-row gap-x-5 items-center">
              <TouchableOpacity
                className="items-center justify-center"
                onPress={() => {
                  setIsLiked(!isLiked);
                }}
              >
                <HeartIcon fillColor={isLiked ? "red" : "white"} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(toggleCommentModal());
                }}
              >
                <CommentIcon />
              </TouchableOpacity>
              <Pressable
                onPress={() => {
                  dispatch(toggleShareModal());
                }}
              >
                <SendIcon />
              </Pressable>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsSaved(!isSaved);
                }}
              >
                <SaveIcon fillColor={isSaved ? "black" : "white"} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="gap-y-1 mt-3 px-2">
            <View>
              <Text className="font-semibold text-xs">
                {isLiked ? "You and " : null}
                {likeCount} likes
              </Text>
            </View>
            <View className="ml-2">
              <Pressable
                onPress={() => nav.navigate("Profile", { userId: userId })}
              >
                <Text className="flex-row gap-x-2 font-semibold text-xs">
                  {nickname}{" "}
                  <Text className="font-normal flex-1 flex-wrap">{text}</Text>
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable onPress={() => dispatch(toggleCommentModal())}>
                <Text className="text-xs text-gray-500">
                  View all 14 comments
                </Text>
              </Pressable>
            </View>
            <AddComment />
          </View>
        </View>
      </View>
    </View>
  );
}
