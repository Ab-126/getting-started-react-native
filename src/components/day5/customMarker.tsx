import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const CustomMarker = ({appartment, onPress}) => {
  return (
    <Marker
    onPress={onPress}
      coordinate={{
        latitude: appartment.latitude,
        longitude: appartment.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "NovaSquare" }}>₹ {appartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({});
