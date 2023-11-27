import {
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCommentModal } from "../store/modal";
import { users } from "../data";
import { AntDesign } from "@expo/vector-icons";

export default function CommentModal() {
  const dispatch = useDispatch();
  const { isCommentOpened } = useSelector((state) => state.modal);
  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={isCommentOpened}
        animationType="slide"
        transparent={true}
        className="mt-[300px]"
        onRequestClose={() => dispatch(toggleCommentModal())}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            shadowColor: "black",
            flex: 1,
            shadowOffset: { width: 10, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 20,
          }}
        >
          <View className="bg-white mt-[300px] flex-1 rounded-tl-xl rounded-tr-xl">
            <View className="gap-y-10 py-3 mb-5 border-b-[#d9d9d9] border-b-[1px]">
              <Pressable
                className="w-[50px] h-[5px] mx-auto bg-[#737373] rounded-2xl"
                onPress={() => {
                  dispatch(toggleCommentModal());
                }}
              ></Pressable>
              <Text className="text-xs font-medium text-center bg-white">
                Comments
              </Text>
            </View>
            <ScrollView className="flex-col gap-y-5">
              {users.map((user) => {
                const { profile_img, nickname, userId } = user;
                return (
                  <View
                    className="flex-row px-4 py-1 justify-between items-center"
                    key={userId}
                  >
                    <View className="flex-row items-center gap-x-4">
                      <Image
                        className="w-[32px] h-[32px] rounded-full"
                        source={{ uri: profile_img }}
                      />
                      <View className="flex-col justify-start items-start">
                        <Text className="text-xs font-medium">{nickname}</Text>
                        <Text className="text-xs">Nice photo !</Text>
                      </View>
                    </View>
                    <View>
                      <AntDesign name="hearto" size={12} color="black" />
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View className="pb-10 pt-5 px-3 bg-white flex-row gap-x-2">
            <Image
              className="w-[32px] h-[32px] rounded-full"
              source={require("../assets/pfp.png")}
            />
            <TextInput placeholder="Add a comment" />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
