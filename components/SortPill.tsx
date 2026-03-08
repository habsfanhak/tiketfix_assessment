import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
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
      {selected ? (
        <View style={styles.verticalContentStack}>
          {/* Top Triangle */}
          <Text style={styles.arrowText}>▲</Text>
          <Text
            style={[
              styles.sortPillText,
              styles.sortPillTextSelected,
              textStyle,
            ]}
          >
            {text}
          </Text>
          
          <Text style={styles.arrowText}>▼</Text>
        </View>
      ) : (
        <Text style={[styles.sortPillText, textStyle]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  sortPill: {
    height: 30,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 11,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  sortPillSelected: {
    backgroundColor: "#6889CC",
  },
  verticalContentStack: {
    alignItems: 'center',
    justifyContent: 'center', 
    height: '100%',
  },
  arrowText: {
    color: '#FFFFFF',
    fontSize: 8,
    lineHeight: 8,
    marginVertical: -2.5,
  },
  sortPillText: {
    color: "#6889CC",
    fontSize: 15,
    lineHeight: 15, 
    fontFamily: "RalewaySemiBold",
  },
  sortPillTextSelected: {
    color: "#FFFFFF",
  },
});