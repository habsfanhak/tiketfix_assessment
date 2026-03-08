import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
} from "react-native";
import AppText from "./AppText";
import Case from "./Case";

interface CaseItemProps {
  item: Case;
}

export default function CaseItem({ item }: CaseItemProps) {
  const dynamicColor = STATUS_COLORS[item.status as keyof typeof STATUS_COLORS];
  const [isSelected, setIsSelected] = useState(false);

  const renderStatusIcon = () => {
    if (item.status === "Select Lawyer") {
      return (
        <Image 
          source={require("@/assets/images/lawyer_group_icon.png")} 
          style={[styles.statusIcon, { tintColor: dynamicColor }]} 
        />
      );
    }

    if (["In Progress", "New", "Cancelled"].includes(item.status)) {
      return <AppText style={[styles.dot, { color: dynamicColor }]}>●</AppText>;
    }


    return null;
  };
  
  return (
    <Pressable 
      style={[
        styles.caseContainer,
        { backgroundColor: isSelected ? '#DDFFE3' : '#FFFFFF' }
      ]}
      onPress={() => setIsSelected(!isSelected)}
    >
        <View style={styles.headerView}>
            <AppText style={styles.headerText}>{item.name}</AppText>
            <View style={styles.statusView}>
              {renderStatusIcon()}
              <AppText style={[styles.statusText, {color: dynamicColor}]}>{item.status}</AppText>
            </View>
        </View>
        <View style={styles.seperatorLine}/>
        <View style={styles.caseBodyContainer}>
          <AppText style={styles.caseBodyText}>Case ID: <AppText style={styles.caseBodyTextValue}>{item.caseId}</AppText></AppText>
          <AppText style={styles.caseBodyText}>Location: <AppText style={styles.caseBodyTextValue}>{item.location}</AppText></AppText>
          <AppText style={styles.caseBodyText}>Date Created: <AppText style={styles.caseBodyTextValue}>
            {new Date(item.dateCreated).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            })}
            </AppText>
          </AppText>
        </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
    caseContainer: {
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D9DADD',
        paddingTop: 2,
        paddingBottom: 8
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 0,
        minHeight: 28
    },
    statusView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'RalewayMedium',
        paddingLeft: 18,
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 1,
        color: '#2D4263'
    },
    statusText: {
        fontFamily: 'RalewaySemiBold',
        paddingRight: 13,
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 1,
        color: '#2D4263'
    },
    statusIcon: {
      height: 24,
      width: 24,
      marginRight: 4
    },
    dot: {
      fontFamily: 'RalewaySemiBold',
      fontSize: 16,  
      lineHeight: 16,
      paddingRight: 2  
    },
    seperatorLine: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#6D6D6D',
      marginHorizontal: 6,
    },
    caseBodyContainer: {
      paddingTop: 6,
      paddingLeft: 18,
      gap: 5
    },
    caseBodyText: {
      fontFamily: 'RalewayRegular',
      fontSize: 12,
      lineHeight: 12,
      letterSpacing: 1,
      color: '#6D6D6D'
    },
    caseBodyTextValue: {
      fontFamily: 'RalewayBold',
    }
});

const STATUS_COLORS = {
  "Select Lawyer": "#52B69A",
  "In Progress": "#FFC470",
  "Cancelled": "#FF0000",
  "New": "#67D97C",
  "Resolved": "#52B69A" 
};