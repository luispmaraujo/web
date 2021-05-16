onload = () => {
  nome.oninput = () => console.log("nome", "input", nome.value);
  nome.onchange = () => console.log("nome", "change", nome.value);
  nome.onfocus = () => console.log("nome", "focus", "alteração iniciada");
  nome.onblur = () => console.log("nome", "blur", "alteração concluída");

  senha.oninput = () => console.log("senha", "input", senha.value);
  senha.onchange = () => console.log("senha", "change", senha.value);
  senha.onfocus = () => console.log("senha", "focus", "alteração iniciada");
  senha.onblur = () => console.log("senha", "blur", "alteração concluída");
};

