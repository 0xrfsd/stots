import React from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Header from "../../components/Header";
import Button from "../../components/Button";

const colors_a = {
  a: "#F1D8D7",
  b: "#CD736D",
  c: "#E8D8D9",
  d: "#2D3539",
  e: "#636A6A",
};

const Login = () => {
  const [error, setError] = React.useState(undefined);
  const [telefone, setTelefone] = React.useState(undefined);
  const [senha, setSenha] = React.useState(undefined);

  const [keyboardAvoid, setKeyboardAvoid] = React.useState(false);
  return (
    <>
      <Header screen="Login" goback />
      <View style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 50 }}>
        <Text style={{ fontSize: 22, color: "#777" }}>
          Telefone
        </Text>
        <TextInput
          keyboardType="number-pad"
          value={telefone}
          maxLength={11}
          onFocus={() => setKeyboardAvoid(true)}
          onBlur={() => setKeyboardAvoid(false)}
          style={{
            fontSize: 26,
            width: "99%",
            marginTop: 5,
            color: "#333",
          }}
          placeholder="Insira seu telefone"
          onChangeText={(telefone) => {
            setError("");
            setTelefone(telefone);
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginTop: 20,
            color: "#777",
          }}
        >
          Senha
        </Text>
        <TextInput
          value={senha}
          secureTextEntry={true}
          onFocus={() => setKeyboardAvoid(true)}
          onBlur={() => setKeyboardAvoid(false)}
          style={{
            fontSize: 26,
            width: "99%",
            marginTop: 5,
            color: "#333",
          }}
          placeholder="Digite sua senha"
          onChangeText={(senha) => {
            setError("");
            setSenha(senha);
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: keyboardAvoid ? "25%" : "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              marginVertical: 5,
              fontSize: 14,
              textDecorationLine: "underline",
            }}
          >
            Nossos termos de serviço
          </Text>
          <Text> ✍️</Text>
        </TouchableOpacity>
        <Button
          marginTop={10}
          title="Fazer login"
          bg={colors_a.b}
          icon="arrowright"
        />
        <Button
          marginTop={10}
          title="Esqueceu sua senha?"
          bg={colors_a.d}
          icon="disconnect"
        />
      </View>
    </>
  );
};

export default Login;
