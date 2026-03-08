import React from "react";
import {
  StyleSheet,
  Pressable,
  View,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import AppText from "./AppText";

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
          <AppText style={styles.arrowText}>▴</AppText>
          <AppText
            style={[
              styles.sortPillText,
              styles.sortPillTextSelected,
              textStyle,
            ]}
          >
            {text}
          </AppText>
          
          <AppText style={styles.arrowText}>▾</AppText>
        </View>
      ) : (
        <AppText style={[styles.sortPillText, textStyle]}>
          {text}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  sortPill: {
    height: 24,
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
    fontSize: 11,
    lineHeight: 11,
    marginVertical: -3.4,
  },
  sortPillText: {
    color: "#6889CC",
    fontSize: 15,
    lineHeight: 15, 
    letterSpacing: 1,
    fontFamily: "RalewaySemiBold",
  },
  sortPillTextSelected: {
    color: "#FFFFFF",
  },
});