import React, { useContext } from "react";
import AuthContext from "../context/auth";

import CorretorRoutes from './corretor.routes';
import UsuarioRoutes from './usuario.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { user, signed } = useContext(AuthContext);

  return user ? (
    user.tipo === "Corretor" ? (
      <CorretorRoutes />
    ) : user.tipo === "Usuario" ? (
      <UsuarioRoutes />
    ) : null
  ) : (
    <AuthRoutes />
  );
};

export default Routes;