import { View, Text, Button, Modal } from "react-native";
import React from "react";
import { toggleShareModal } from "../store/modal";
import { useDispatch, useSelector } from "react-redux";

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
              dispatch(toggleShareModal());
            }}
          />
          <Text>Deneme</Text>
        </View>
      </Modal>
    </View>
  );
}
