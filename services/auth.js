const axios = require("axios");

export async function signIn(cpf, senha) {
  const response = await axios.post(
    "http://192.168.0.110:9904/api/v0/auth/login",
    {
      cpf: cpf,
      senha: senha,
    }
  );
  return response
}

export async function signUp(nome, empresaId, email, rota, telefone, cpf, senha) {
  const response = await axios.post(
    `http://192.168.0.110:9904/api/v0/auth/${rota}`,
    {
      nome: nome,
      telefone: telefone,
      cpf: cpf,
      senha: senha,
    }
  );
  return response
}
