import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { Entypo } from "@expo/vector-icons";
import { posts, users } from "../data";
import HeartIcon from "../assets/svg/HeartIcon";
import CommentIcon from "../assets/svg/CommentIcon";
import SendIcon from "../assets/svg/SendIcon";
import SaveIcon from "../assets/svg/SaveIcon";
import AddComment from "./AddComment";
import CommentModal from "./CommentModal";
import { useDispatch } from "react-redux";
import { toggleCommentModal, toggleShareModal } from "../store/modal";
import ShareModal from "./ShareModal";

export default function SinglePost({ route }) {
  const dispatch = useDispatch();
  const { postId, userId } = route.params;
  const nav = useNavigation();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  let username;

  const handleGoBack = () => {
    nav.goBack();
  };

  useEffect(() => {
    setData(posts.filter((post) => post.postId === postId));
    setUser(users.filter((user) => user.userId === userId));
  }, [postId]);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="px-3 flex-row items-center gap-x-8">
          <Pressable onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Text className="text-lg font-semibold">Explore</Text>
        </View>

        {user.map((ud, index) => {
          const { nickname, profile_img } = ud;
          username = nickname;
          return (
            <View
              className="flex-row items-center justify-between mt-5 mb-2 px-2"
              key={index}
            >
              <View className="flex-row items-center gap-x-3">
                <Image
                  className="w-[28px] h-[28px] object-cover rounded-full"
                  source={{ uri: profile_img }}
                />
                <Text className="font-medium text-sm">{nickname}</Text>
              </View>
              <View className="flex-row items-center gap-x-4">
                <Pressable className="bg-[#d9d8d7] px-3 py-1 rounded-lg">
                  <Text className="text-xs font-medium">Follow</Text>
                </Pressable>
                <Entypo name="dots-three-vertical" size={18} color="black" />
              </View>
            </View>
          );
        })}

        {data.map((dt) => {
          const { postId, postImg, postDesc, likeCount, shareDate } = dt;
          return (
            <View className="flex-1" key={postId}>
              <View className="h-[300px]">
                <Swiper className="h-[300px]">
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
              </View>
              <View className="flex-row justify-between items-center px-2 mt-5">
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
                  <Text className="flex-row gap-x-2 font-semibold text-xs">
                    {username}{" "}
                    <Text className="font-normal flex-1 flex-wrap">
                      {postDesc}
                    </Text>
                  </Text>
                </View>
                <View>
                  <Pressable>
                    <Text className="text-xs text-gray-500">
                      View all 14 comments
                    </Text>
                  </Pressable>
                </View>
                <AddComment />
              </View>
            </View>
          );
        })}
      </SafeAreaView>
      <CommentModal />
      <ShareModal />
    </View>
  );
}
