import { View, Text, Modal } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function CommentModal() {
  const { isOpened } = useSelector((state) => state.modal);
  console.log(isOpened);
  return (
    <Modal transparent={true}>
      <View className="mt-20 bg-white flex-1">
        <Text>Deneme</Text>
      </View>
    </Modal>
  );
}
