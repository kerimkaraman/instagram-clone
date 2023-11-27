import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { posts, users } from "../data";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import HeartIcon from "../assets/svg/HeartIcon";
import { useDispatch } from "react-redux";
import CommentIcon from "../assets/svg/CommentIcon";
import { toggleCommentModal, toggleShareModal } from "../store/modal";
import CommentModal from "./CommentModal";
import ShareModal from "./ShareModal";
import SendIcon from "../assets/svg/SendIcon";
import SaveIcon from "../assets/svg/SaveIcon";
import Carousel from "react-native-reanimated-carousel";
import AddComment from "./AddComment";

export default function SinglePost({ route }) {
  const { postId, userId } = route.params;
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  let username;

  useEffect(() => {
    setUser(users.filter((user) => user.userId == userId));
    setPost(posts.filter((post) => post.postId == postId));
  }, [postId]);
  const dispatch = useDispatch();
  const nav = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-row items-center gap-x-4 px-4">
        <Pressable
          onPress={() => {
            nav.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text className="text-lg font-semibold">Explore</Text>
      </View>
      {user.map((ud) => {
        const { userId, nickname, profile_img } = ud;
        username = nickname;
        return (
          <View key={userId} className="flex-row justify-between p-4">
            <View className="flex-row items-center gap-x-2">
              <Image
                className="w-[28px] h-[28px] object-cover rounded-full"
                source={{ uri: profile_img }}
              />
              <Text className="font-medium text-xs">{nickname}</Text>
            </View>
            <View className="flex-row items-center gap-x-4">
              <Pressable className="bg-[#d8d9d9] py-1 px-2 self-start rounded-md">
                <Text>Follow</Text>
              </Pressable>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
          </View>
        );
      })}
      {post.map((pd) => {
        const { postImg, postId, postDesc, likeCount, shareDate } = pd;
        return (
          <View key={postId}>
            <Carousel
              width={width}
              height={height / 3}
              data={postImg}
              renderItem={({ item }) => {
                return (
                  <Image
                    key={postId}
                    style={{ width: "100%", flex: 1, height: "100%" }}
                    source={{ uri: item }}
                  />
                );
              }}
            />
            <View className="mt-5 mb-2 flex-row items-center justify-between px-3">
              <View className="flex-row items-center gap-x-2">
                <TouchableOpacity
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
                <TouchableOpacity
                  onPress={() => {
                    dispatch(toggleShareModal());
                  }}
                >
                  <SendIcon />
                </TouchableOpacity>
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
            <View className="mt-4 px-3 gap-y-2">
              <View className="items-start">
                <Text className="text-xs font-semibold">
                  {isLiked ? "You and " : null} {likeCount} likes
                </Text>
              </View>
              <View>
                <Text className="font-semibold text-xs">
                  {username} <Text className="font-normal">{postDesc}</Text>
                </Text>
              </View>
              <View>
                <Pressable onPress={() => dispatch(toggleCommentModal())}>
                  <Text className="text-xs text-gray-500">
                    View all 14 comments
                  </Text>
                </Pressable>
              </View>
              <AddComment />
              <View>
                <Text className="text-xs text-gray-500">{shareDate}</Text>
              </View>
            </View>
          </View>
        );
      })}
      <CommentModal />
      <ShareModal />
    </SafeAreaView>
  );
}

/* <View className="mt-10 flex-row items-center justify-between px-2">
                <View className="flex-row items-center gap-x-2">
                  <TouchableOpacity
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
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(toggleShareModal());
                    }}
                  >
                    <SendIcon />
                  </TouchableOpacity>
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
              </View> */
