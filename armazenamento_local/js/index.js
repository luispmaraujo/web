window.onload = () => {
  // carrega o ultimo identificador de usuário usado
  nome.value = localStorage.getItem("username");

  // loga o usuário e registra o seu identificador
  login.onsubmit = (evento) => {
    localStorage.setItem("username", nome.value);
    alert(`Usuário ${nome.value} logado.`);
    evento.preventDefault();
  };
};
