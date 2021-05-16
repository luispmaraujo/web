window.onload = () => {
  login.onsubmit = () => {
    console.log({ nome: nome.value, senha: senha.value });
    return true;
  };
};
