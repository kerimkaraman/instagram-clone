import { View, Text, Modal, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCommentModal } from "../store/modal";

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
        <View
          style={{
            shadowColor: "black",
            shadowOffset: { width: 2, height: 2 },
            shadowRadius: 20,
          }}
          className="bg-white mt-[300px] mb-[70px] flex-1 rounded-tl-xl rounded-tr-xl"
        >
          <Button
            title="Close"
            onPress={() => {
              dispatch(toggleCommentModal());
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
