import { View, Text, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import Netflix from "assets/lottie/netflix.json";
import { useRef } from "react";
import { Stack } from "expo-router";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        ref={animation}
        autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          height: 200,
        }}
        source={Netflix}
      />
    </View>
  );
};

export default AnimationScreen;
