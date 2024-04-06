import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button, View } from "react-native";

const description = `
# AirBNB Maps
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 5 }}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day5/airbnb"} asChild>
        <Button title="Go to AirBNB Map" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
