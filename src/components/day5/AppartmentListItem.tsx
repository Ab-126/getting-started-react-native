import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AppartmentListItem = ({ appartment }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: appartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{appartment.title}</Text>
        <Text style={styles.description}>Stay at this appartment for an affordable price</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>₹ {appartment.price} / night</Text>
          <Text style={styles.price}>⭐ {appartment.rating}.0 ({appartment?.stars ?? 5})</Text>
        </View>
      </View>
    </View>
  );
};

export default AppartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  title: {
    fontFamily: "Inter",
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {

  },
  price: {
    fontFamily: 'Inter'
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto'
  }
});
