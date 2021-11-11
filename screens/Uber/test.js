import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Pressable,
  Dimensions,
} from "react-native";
import MapView from "react-native-map-clustering";

import { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import CustomMarker from "./marker";

import PostCarouselItem from "./PostCarouselItem";

import places from "./data";

import Regioes from "../../components/Regioes";

import { useNavigation } from '@react-navigation/native';

const SearchResultsMaps = (props) => {
  const [banner, setBanner] = useState(true);

  const navigation = useNavigation();

  const width = useWindowDimensions().width;

  const [selectedPlaceId, setSelectedPlaceID] = useState(null);

  const flatlist = useRef();

  const map = useRef();

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });

  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceID(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);

    flatlist.current.scrollToIndex({ animated: false, index: selectedPlaceId });

    const selectedPlace = places[index];

    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.0085,
      longitudeDelta: 0.0045,
    };

    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  const Header = () => {
    return (
      <View
        style={{
          height: 100,
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
              color: "orange",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header />
      <MapView
        clusterColor="#000"
        ref={map}
        style={{
          width: "100%",
          height: Dimensions.get("window").height() - 100,
        }}
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

      {/* <View style={{ height: `auto`, width: '100%', backgroundColor: "transparent", position: 'absolute', bottom: banner ? 240 : 240 }}>
                <Regioes />
            </View> */}

      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          ref={flatlist}
          data={places}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
        />
        {/* <PostCarouselItem post={places[0]} /> */}
      </View>
    </View>
  );
};

export default SearchResultsMaps;
