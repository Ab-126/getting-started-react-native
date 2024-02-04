import { View, Text, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import Netflix from "assets/lottie/netflix.json";
import { useRef } from "react";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: Dimensions.get('screen').width,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={Netflix}
      />

      <Button title="Play" onPress={() => animation?.current?.play()} />
      <Button title="Pause" onPress={() => animation?.current?.pause()} />
      <Button title="Reset" onPress={() => animation?.current?.reset()} />
    </View>
  );
};

export default AnimationScreen;
