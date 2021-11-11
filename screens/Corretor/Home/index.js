import React, { useState, useLayoutEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import AuthContext from "../../../context/auth";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import Building from "../../../assets/build.gif";

const Item = ({ icon, title, goto, right }) => {
  return (
    <TouchableOpacity
      style={{
        width: "49%",
        height: 150,
        backgroundColor: "#333",
        borderRadius: 5,
        padding: 15,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 60,
          width: 60,
          borderRadius: 5,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name={icon} size={35} color="#333" />
      </View>
      <View
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ marginTop: "auto" }}>
          <Text
            style={{
              width: "100%",
              color: "#fff",
              textAlign: "left",
            }}
          >
            Buscar por
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              width: "100%",
              color: "#fff",
              textAlign: "left",
            }}
          >
            {title}
          </Text>
        </View>
        <FontAwesome5
          name="arrow-alt-circle-right"
          size={24}
          color="#fff"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <View
      style={{
        height: 110,
        paddingTop: 50,
        paddingBottom: 10,
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Our Brooker</Text>
        <Text style={{ fontSize: 16 }}>Plataforma do corretor</Text>
      </View>
      <Image
        source={{ uri: "https://github.com/0xrfsd.png" }}
        style={{ height: 40, width: 40, borderRadius: 50 }}
      />
    </View>
  );
};

const Home = () => {
  const { user } = useContext(AuthContext);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullScreenMap, setFullScreenMap] = React.useState(false);

  const navigation = useNavigation();

  const Mapa = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Mapa")}
        style={{ paddingHorizontal: 20 }}
      >
        <ImageBackground
          source={{
            uri: "https://img2.pngio.com/street-map-png-7-png-image-street-map-png-1615_844.png",
          }}
          style={{
            height: 150,
            width: "100%",
          }}
          imageStyle={{ borderRadius: 5 }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              paddingVertical: 10,
              height: "auto",
              marginLeft: 10,
              marginBottom: 10,
              marginTop: "auto",
              width: 150,
              padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <View style={{ marginTop: "auto" }}>
              <Text
                style={{
                  width: "100%",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                Buscar por
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  width: "100%",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                localização
              </Text>
            </View>
            <FontAwesome5 name="map-pin" size={25} color="#333" />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const Search = () => {
    return (
      <View style={{ height: "auto", width: "100%", padding: 20 }}>
        <TouchableOpacity
          style={{
            height: 60,
            borderRadius: 5,
            width: "100%",
            paddingHorizontal: 10,
            backgroundColor: "#fff",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Busca personalizada
            </Text>
            <Text style={{ fontSize: 18 }}>Encontre o imóvel perfeito</Text>
          </View>
          <FontAwesome5
            name="arrow-alt-circle-right"
            size={24}
            color="#000"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const Greeting = () => {
    return (
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <View>
          <Text style={{ fontSize: 16 }}>Seja bem-vindo(a),</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.nome}!</Text>
        </View>
      </View>
    );
  };

  const City = () => {
    return (
      <View
        style={{
          height: 60,
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          borderTopWidth: 0.5,
          borderTopColor: "#eee",
          borderBottomWidth: 0.5,
          borderBottomColor: "#eee",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Sua localização atual</Text>
        <Text style={{ textDecorationLine: "underline" }}>
          Av. Presidente Kennedy 289, Centro - Anápolis GO
        </Text>
      </View>
    );
  };

  useLayoutEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (location) {
        setLocation(location);
        setLoading(false);
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "70%",
            }}
          >
            <Image source={Building} style={{ height: 200, width: 200 }} />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#333",
              fontSize: 22,
              marginTop: "auto",
            }}
          >
            Our brooker
          </Text>
          <Text style={{ color: "#333", fontSize: 16, marginBottom: 10 }}>
            O seu app está carregando
          </Text>
          <View style={{ width: 40, height: 50 }}>
            <ActivityIndicator size="large" color="#333" />
          </View>
        </View>
      ) : (
        <>
          <Header />
          {/* <Greeting /> */}
          <Search />
          <Mapa />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Item icon="building" title="Apartamentos" />
            <Item icon="home" title="Casas" right />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginTop: 10,
            }}
          >
            <Item icon="building" title="Apartamentos" />
            <Item icon="home" title="Casas" right />
          </View>
        </>
      )}
    </>
  );
};

export default Home;
