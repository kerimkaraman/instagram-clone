import { View, Text, Modal } from "react-native";
import React from "react";

export default function CommentModal({ visibility }) {
  return (
    <Modal
      style={{ margin: 0, marginTop: 20, backgroundColor: "red" }}
      visible={true}
    >
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text>deneme</Text>
      </View>
    </Modal>
  );
}
