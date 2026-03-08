import { Tabs } from "expo-router";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function TabIcon({
  focused,
  active,
  iconStyle
}: {
  focused: boolean;
  active: any;
  iconStyle: any;
}) {
  return (
    <View style={styles.iconWrapper}>
      <Image
        source={active}
        style={iconStyle}
        resizeMode="contain"
      />
      {focused && <View style={styles.activeUnderline} />}
    </View>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = 65; 

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: TAB_BAR_HEIGHT + insets.bottom,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: '#E8E8E8',
          overflow: 'visible', 
        },
        tabBarIconStyle: {
          marginTop: 12, 
        },
        tabBarItemStyle: {
          paddingHorizontal: 0,
        },
        tabBarActiveBackgroundColor: "#E8F3FF", 
        tabBarLabelStyle: {
          fontSize: 10,
          letterSpacing: 1,
          fontFamily: "RalewaySemiBold",
          marginBottom: 8,
        },
        tabBarActiveTintColor: "#46649C",
        tabBarInactiveTintColor: "#46649C",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              active={require("@/assets/images/home_icon_selected.png")}
              iconStyle={[styles.icon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              active={require("@/assets/images/messages_icon_selected.png")}
              iconStyle={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Cases",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              active={require("@/assets/images/cases_icon_selected.png")}
              iconStyle={[styles.icon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              active={require("@/assets/images/calendar_icon_selected.png")}
              iconStyle={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              active={require("@/assets/images/user_icon_selected.png")}
              iconStyle={styles.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 5,
    height: 65,
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 13
  },
  activeUnderline: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#A6CCF6',
  },
});