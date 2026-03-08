import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

interface Case {
  "name": string,
  "caseId": string,
  "location": string,
  "dateCreated": string,
  "status": string
};

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
      return <Text style={[styles.dot, { color: dynamicColor }]}>●</Text>;
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
            <Text style={styles.headerText}>{item.name}</Text>
            <View style={styles.statusView}>
              {renderStatusIcon()}
              <Text style={[styles.statusText, {color: dynamicColor}]}>{item.status}</Text>
            </View>
        </View>
        <View style={styles.seperatorLine}/>
        <View style={styles.caseBodyContainer}>
          <Text style={styles.caseBodyText}>Case ID: <Text style={styles.caseBodyTextValue}>{item.caseId}</Text></Text>
          <Text style={styles.caseBodyText}>Location: <Text style={styles.caseBodyTextValue}>{item.location}</Text></Text>
          <Text style={styles.caseBodyText}>Date Created: <Text style={styles.caseBodyTextValue}>{item.dateCreated}</Text></Text>
        </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
    caseContainer: {
        height: 97,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D9DADD'
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingTop: 4,
        paddingBottom: 2
    },
    statusView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'RalewayMedium',
        fontSize: 16,
        color: '#2D4263'
    },
    statusText: {
        fontFamily: 'RalewaySemiBold',
        fontSize: 14,
        lineHeight: 16,
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
      height: 0.5,
      backgroundColor: '#6D6D6D',
      marginHorizontal: 6,
      marginTop: 1
    },
    caseBodyContainer: {
      paddingTop: 2,
      paddingLeft: 18,
      gap: 1
    },
    caseBodyText: {
      fontFamily: 'RalewayRegular',
      fontSize: 12,
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