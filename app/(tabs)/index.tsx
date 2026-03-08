import { Text, View, StyleSheet, Image, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState } from "react";
import SortPill from "@/components/SortPill";
import CaseItem from "@/components/CaseItem";
import { cases } from "@/data/cases";

export default function Index() {
  const [sortBy, setSortBy] = useState<"az" | "date" | "status">("az");

  return (
    <>
      <SafeAreaView
        style={styles.background}
        edges={['top', 'left', 'right']}
      >
        <View
          style={styles.header}
        >
          <Image source={require('@/assets/images/logo.png')} style={styles.logoLeft}/>
          <Image source={require('@/assets/images/notification.png')} style={styles.logoRight}/>
        </View>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="rgba(0,0,0,0.4)"
            />
            <Image
              source={require('@/assets/images/search.png')}
              style={styles.searchIcon}
            />
          </View>
        </View>
        <View style={styles.caseSortContainer}>
          <SortPill
            text="AZ"
            selected={sortBy === "az"}
            onPress={() => setSortBy("az")}
          />

          <SortPill
            text="Date"
            selected={sortBy === "date"}
            onPress={() => setSortBy("date")}
          />

          <SortPill
            text="Status"
            selected={sortBy === "status"}
            onPress={() => setSortBy("status")}
          />
        </View>

        <FlatList
          data={cases}
          style={styles.flatList}
          persistentScrollbar={true} // Android
          contentContainerStyle={styles.caseContainer} 
          keyExtractor={(item, index) => `${item.caseId}-${index}`}
          renderItem={({ item }) => <CaseItem item={item}/>}
        />
                
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E0EAFF',
    paddingTop: 12,
  },
  logoLeft: {
    height: 45,
    width: 45,
    resizeMode: "contain"
  },
  logoRight: {
    height: 45,
    width: 45,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  searchBarContainer: {
    marginTop: 15,
    paddingHorizontal: 22,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    height: 43,
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'RalewaySemiBold'
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginLeft: 10
  },
  caseSortContainer: {
    marginTop: 15,
    flexDirection: 'row',
    paddingHorizontal: 22,
    gap: 5
  },
  flatList: {
    flex: 1,
    marginTop: 16,
  },
  caseContainer: {
    paddingHorizontal: 25,
    paddingBottom: 20,
    gap: 5,
  },

})