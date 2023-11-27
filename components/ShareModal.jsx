import {
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { toggleShareModal } from "../store/modal";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../data";

export default function ShareModal() {
  const dispatch = useDispatch();
  const { isShareOpened } = useSelector((state) => state.modal);
  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={isShareOpened}
        animationType="slide"
        transparent={true}
        className="mt-[300px]"
      >
        <KeyboardAvoidingView
          style={{
            flex: 1,
            shadowColor: "black",
            shadowOffset: { width: 2, height: 2 },
            shadowRadius: 20,
            shadowOpacity: 0.5,
          }}
        >
          <View className="bg-white mt-[300px] flex-1 rounded-tl-xl rounded-tr-xl">
            <View className="gap-y-10 py-3 mb-0 border-b-[#d9d9d9] border-b-[1px]">
              <Pressable
                className="w-[50px] h-[5px] mx-auto bg-[#737373] rounded-2xl"
                onPress={() => {
                  dispatch(toggleShareModal());
                }}
              ></Pressable>
              <View>
                <TextInput
                  placeholder="Write a message..."
                  className="h-[40px] px-2"
                />
              </View>
            </View>
            <ScrollView>
              <View className="bg-[#d9d9d9] flex-row items-center rounded-lg gap-x-5 py-2 mx-4 ">
                <EvilIcons name="search" size={16} color="gray" />
                <TextInput placeholder="Search" />
              </View>
              {users.map((user) => {
                const { userId, profile_img, namesurname, nickname } = user;
                return (
                  <View
                    key={userId}
                    className="px-4 my-2 flex-row justify-between"
                  >
                    <View className="flex-row items-center gap-x-5">
                      <Image
                        className="w-[36px] h-[36px] rounded-full"
                        source={{ uri: profile_img }}
                      />
                      <View>
                        <Text className="text-xs font-medium">
                          {namesurname}
                        </Text>
                        <Text className="text-xs text-gray-500">
                          {nickname}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Pressable className="bg-[#0095f6] px-3 py-1 rounded-md">
                        <Text className="text-xs text-white font-semibold">
                          Send
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
