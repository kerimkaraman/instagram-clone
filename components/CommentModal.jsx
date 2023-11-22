import { View, Text, Modal } from "react-native";
import React, { useEffect } from "react";
import CommentItem from "./CommentItem";
import { users } from "../data";

export default function CommentModal({ visibility }) {
  return <Modal visible={visibility} className="m-0"></Modal>;
}
