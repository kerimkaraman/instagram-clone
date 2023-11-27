import {
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { posts } from "../data";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export default function ProfilePosts({ route }) {
  const { isUser, userId } = route.params;
  const nav = useNavigation();
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setUserPosts(posts.filter((post) => post.userId == userId));
    setIsLoading(false);
  }, [userId]);
  return isLoading ? null : (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      className="bg-white"
      style={{ flex: 1 }}
    >
      {isUser ? (
        <Text>There is no post.</Text>
      ) : (
        <View className="flex-1">
          {userPosts.map((post) => {
            const { postImg, postId, userId } = post;
            return (
              <Pressable
                onPress={() => {
                  nav.navigate("SinglePost", {
                    postId: postId,
                    userId: userId,
                  });
                }}
                className="flex-1"
                key={postId}
              >
                <View style={styles.imageContainer}>
                  <ImageBackground
                    className="w-[100%] h-[100%]"
                    source={{ uri: postImg[0] }}
                  ></ImageBackground>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth / 3 - 1,
    height: windowWidth / 3,
  },
});
