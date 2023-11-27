import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { posts } from "../data";
import { EvilIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
export default function Search() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <View className="bg-white flex-row justify-center pb-2">
        <View className="bg-[#efefef] flex-row items-center gap-x-2 px-2 py-1 w-max self-start rounded-md">
          <EvilIcons name="search" size={28} color="black" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            className="w-[300px]"
          />
        </View>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        className="bg-white mt-5 gap-[1px]"
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {posts.map((post) => {
          const { postImg, postId, userId } = post;
          return (
            <Pressable
              onPress={() => {
                nav.navigate("SinglePost", { postId: postId, userId: userId });
              }}
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth / 3 - 1,
    height: windowWidth / 3,
  },
});
