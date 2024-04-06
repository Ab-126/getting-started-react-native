import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Stack } from "expo-router";
import appartments from "assets/data/day5/apartment.json";
import CustomMarker from "@/components/day5/customMarker";
import AppartmentListItem from "@/components/day5/AppartmentListItem";
import BottomSheet, {
  BottomSheetFlatList,
  useGestureEventsHandlersDefault,
} from "@gorhom/bottom-sheet";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: appartments[0].latitude,
    longitude: appartments[0].longitude,
    latitudeDelta: 0.0944,
    longitudeDelta: 0.0944,
  });

  const snapPoints = useMemo(() => [55, "25%", "50%", "90%"], []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} region={mapRegion}>
        {appartments.map((appartment) => (
          <CustomMarker
            appartment={appartment}
            key={appartment.id}
            onPress={() => setSelectedApartment(appartment)}
          />
        ))}
      </MapView>

      {/* Display selected Apartments */}
      {selectedApartment && (
        <View
          style={{
            position: "absolute",
            bottom:
              typeof snapPoints[0] === "number" ? snapPoints[0] + 10 : 100,
            right: 10,
            left: 10,
          }}
        >
          <AppartmentListItem appartment={selectedApartment} />
        </View>
      )}

      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {appartments.length} places</Text>
          <BottomSheetFlatList
            data={appartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <AppartmentListItem appartment={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 10,
    marginBottom: 20,
  },
});
