import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page}>
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
  },
  body: {
    fontSize: 16,
    fontFamily: "Inter",
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});

export default MarkdownDisplay;
