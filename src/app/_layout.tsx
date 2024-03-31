import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { NovaSquare_400Regular } from "@expo-google-fonts/nova-square";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as splashScreen from "expo-splash-screen";
import Animated, { FadeIn } from "react-native-reanimated";

// splashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    NovaSquare: NovaSquare_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {showAnimatedSplash ? (
        <AnimatedSplashScreen
          onAnimationFinish={(isCancelled) => {
            if (!isCancelled) {
              setSplashAnimationFinished(true);
            }
          }}
        />
      ) : (
        <Animated.View style={{flex: 1}} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: "DEVember" }} />
        </Stack>
        </Animated.View>
      )}
    </GestureHandlerRootView>
  );
}
