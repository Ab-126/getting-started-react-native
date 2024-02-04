import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button, Text, View, SafeAreaView } from "react-native";

const description = `
# Markdown

Integrate Markdown content in **React Native**

Today's Agenda:
  - Introduction to Markdown
  - Markdown Syntax Overview
  - Setting Up React Native for Markdown
  - Implementing Markdown Rendering
  - Styling Markdown Content
  - Using Markdown in React Nativ Components
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 5 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day3/editor"} asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
