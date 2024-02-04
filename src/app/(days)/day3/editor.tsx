import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

const copy =
  `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
*Italic Text*
**Bold Text**
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
1. First item
2. Second item
3. Third item
   1. Subitem 3.1
   2. Subitem 3.2
   [Visit OpenAI](https://www.openai.com)
   ![Iron Man](https://cdn.kobo.com/book-images/2c24147a-0fa8-4eae-b183-8da05112d192/1200/1200/False/iron-man-3-suits-of-armor.jpg)
` +
  "```python" +
  "\n" +
  "print('Hello World')" +
  "\n" +
  "```" +
  "\n" +
  "```" +
  `> This is a blockquote.
---
`;

const EditorScreen = () => {
  return <MarkdownDisplay>{copy}</MarkdownDisplay>;
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

export default EditorScreen;
