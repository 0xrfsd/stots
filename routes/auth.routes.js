import React from "react";
import Login from "../screens/Auth/login";
import Register from "../screens/Auth/register";

import Auth from "../screens/Auth/index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
