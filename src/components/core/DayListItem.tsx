import { Text, View, StyleSheet } from "react-native";

interface DayListItemProps {
  day: number;
}

function DayListItem({ day }: DayListItemProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    borderColor: "#9b4521",
  },
  text: {
    color: "#9B4521",
    fontSize: 70,
    fontFamily: 'NovaSquare'
  },
});

export default DayListItem;
