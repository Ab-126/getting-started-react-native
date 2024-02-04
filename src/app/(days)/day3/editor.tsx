import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { useState } from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import Markdown from "react-native-markdown-display";

const template = `
# Markdown editor

Hello **World**!
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("preview");

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tab,
            { backgroundColor: tab === "edit" ? "pink" : "whitesmoke" },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tab,
            { backgroundColor: tab === "preview" ? "pink" : "whitesmoke" },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput
          style={styles.input}
          onChangeText={setContent}
          numberOfLines={50}
          value={content}
          multiline
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    borderRadius: 10,
    textAlignVertical: "top",
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});

export default EditorScreen;
