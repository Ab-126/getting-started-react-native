import { Text, View, StyleSheet, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome #DEVember",
    description: `Daily New Mini Projects, to deep dive into react native`,
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together",
    description: `We will build 24 projects with React Native and Expo`,
  },
  {
    icon: "people-arrows",
    title: "Education for Children",
    description: `Contribute to the fundraiser "Education for children" to help Save the Children in their effort of providing to every children`,
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.pageContent}>
        <View style={styles.stepIndicatorContainer}>
          {onboardingSteps.map((step, index) => (
            <View
              key={step.title}
              style={[
                styles.stepIndicator,
                { backgroundColor: index === screenIndex ? "#CEF202" : "gray" },
              ]}
            />
          ))}
        </View>

        <FontAwesome5
          style={styles.image}
          name={data.icon}
          size={100}
          color="#CEF202"
        />

        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.buttonsRow}>
            <Text style={styles.buttonText} onPress={endOnboarding}>
              Skip
            </Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={onContinue}>
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 25,
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 50,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    // padding: 15,
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});