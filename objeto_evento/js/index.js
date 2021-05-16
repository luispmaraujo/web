let trataEvento = (evento) => {
  console.log(`${evento.type} em ${evento.target.id}`);
};
window.onload = () => {
  let lista = document.querySelectorAll("#imagens > img");
  lista.forEach((i) => (i.onclick = trataEvento));
};
