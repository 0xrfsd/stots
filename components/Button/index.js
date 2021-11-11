import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Button = ({
  action,
  title,
  borderRadius,
  borderColor,
  borderWidth,
  marginTop,
  bg,
  color,
  position,
  icon
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={action}
      style={{
        marginTop: marginTop ? marginTop : null,
        borderColor: borderColor ? borderColor : null,
        borderWidth: borderWidth ? borderWidth : null,
        borderRadius: borderRadius ? borderRadius : 5,
        backgroundColor:
          borderColor && borderWidth ? "transparent" : bg ? bg : "#333",
        height: 55,
        width: "100%",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: borderColor && borderWidth ? borderColor : "#fff",
        }}
      >
        {title}
      </Text>
      {icon ? (
        <AntDesign
          name={icon}
          size={24}
          color={borderColor && borderWidth ? borderColor : "#fff"}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;
