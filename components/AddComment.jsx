import { View, Text, Image, TextInput } from "react-native";

export default function AddComment() {
  return (
    <View className="flex-row gap-x-2 my-1">
      <Image
        className="w-[24px] h-[24px] rounded-full"
        source={require("../assets/pfp.png")}
      />
      <TextInput placeholder="Add a comment..." className="text-xs" />
    </View>
  );
}
