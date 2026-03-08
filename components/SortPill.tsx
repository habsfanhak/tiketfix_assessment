import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";

type SortPillProps = {
  text: string;
  selected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function SortPill({
  text,
  selected = false,
  onPress,
  style,
  textStyle,
}: SortPillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.sortPill,
        selected && styles.sortPillSelected,
        style,
      ]}
    >
      <Text
        style={[
          styles.sortPillText,
          selected && styles.sortPillTextSelected,
          textStyle,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  sortPill: {
    height: 25,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 11,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  sortPillSelected: {
    backgroundColor: "#6889CC",
  },
  sortPillText: {
    color: "#6889CC",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "RalewaySemiBold",
  },
  sortPillTextSelected: {
    color: "#FFFFFF",
  },
});