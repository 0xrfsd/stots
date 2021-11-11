import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import MapView from "react-native-map-clustering";

import { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { useNavigation } from "@react-navigation/native";
const Mapa = () => {
  const navigation = useNavigation();

  const Header = () => {
    return (
      <View
        style={{
          height: "auto",
          padding: 20,
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Mapa</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              textDecorationLine: "underline",
              color: "#333",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Map = () => {
    return (
      <MapView
        clusterColor="#000"
        ref={map}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -16.7031441,
          longitude: -49.2336704,
          latitudeDelta: 0.0085,
          longitudeDelta: 0.0045,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceID(place.id)}
          />
        ))}
      </MapView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
    </View>
  );
};

export default Mapa;
