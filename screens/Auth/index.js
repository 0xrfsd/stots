import React from "react";
import { Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import Building from "../../assets/build.gif";

const colors = {
  a: "#3F3F37",
  b: "#D6D6B1",
  c: "#C1CAD4",
  d: "#DEC6A7",
  e: "#DE541E",
};

const colors_a = {
  a: "#F1D8D7",
  b: "#CD736D",
  c: "#E8D8D9",
  d: "#2D3539",
  e: "#636A6A",
};

const Auth = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingBottom: 50,
      }}
    >
      <Image
        source={Building}
        style={{ marginTop: "auto", height: 200, width: 200 }}
      />
      <View style={{ marginTop: "auto", width: "100%" }}>
        <Text
          style={{
            color: "#000",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          Our Brooker
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 16,
          }}
        >
          O app oficial do corretor de imóveis
        </Text>
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              color: "#000",
              marginVertical: 15,
              fontSize: 14,
              textDecorationLine: "underline",
            }}
          >
            Nossos termos de serviço
          </Text>
          <Text>{" "}✍️</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Já possuo conta"
        bg={colors_a.b}
        icon="arrowright"
        action={() => navigation.navigate("Login")}
      />
      <Button
        title="Ainda não possuo conta"
        bg={colors_a.d}
        icon="arrowright"
        marginTop={10}
        action={() => navigation.navigate("Register")}
      />
      {/* title, borderRadius, borderColor, borderWidth,  bg, color, icon, action  */}
    </View>
  );
};

export default Auth;
