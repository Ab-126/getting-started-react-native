import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button, Text, View, SafeAreaView } from "react-native";

const description = `
# Animated Splash Screen

`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 5 }}>
      <Stack.Screen options={{ title: "Day 4: Animated Splash Screen" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day4/animation"} asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
