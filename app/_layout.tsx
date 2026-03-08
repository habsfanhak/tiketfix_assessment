import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    RalewayRegular: require("@/assets/fonts/Raleway-Regular.ttf"),
    RalewayMedium: require("@/assets/fonts/Raleway-Medium.ttf"),
    RalewaySemiBold: require("@/assets/fonts/Raleway-SemiBold.ttf"),
    RalewayBold: require("@/assets/fonts/Raleway-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
