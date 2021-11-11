import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomMarker = ({ price, places, coordinate, onPress, isSelected }) => {
  return (
    <Marker coordinate={coordinate} style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: "#000",
            width: 46,
            height: 46,
            borderRadius: 84 / 2,
          },
        ]}
      />
      <View
        style={[
          styles.cluster,
          {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: "#fff",
            width: 35,
            height: 35,
            borderRadius: 84 / 2,
          },
        ]}
      >
        <MaterialCommunityIcons name={isSelected ? "home" : "home-circle"} size={isSelected ? 26 : 33} color={isSelected ? "#000" : "#333"} />
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 46,
    width: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    position: "absolute",
    opacity: 0.5,
    zIndex: 0,
  },
  cluster: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    fontWeight: "bold",
  },
});

export default CustomMarker;