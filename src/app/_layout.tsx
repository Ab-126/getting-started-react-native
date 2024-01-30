import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { NovaSquare_400Regular } from "@expo-google-fonts/nova-square";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    NovaSquare: NovaSquare_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}
