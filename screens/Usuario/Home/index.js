import React from "react";
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
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import Header from "../../../components/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
        <FontAwesome5 name="arrow-alt-circle-right" size={24} color="#fff" style={{ marginLeft: 'auto' }} />
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <>
      <Header screen="Our Brooker" />
      <Text>Usuario</Text>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Item icon="building" title="Edíficios" />
        <Item icon="home" title="Propríedades" right />
      </View> */}
    </>
  );
};

export default Home;
