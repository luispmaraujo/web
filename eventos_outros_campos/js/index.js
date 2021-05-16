onload = () => {
  nome.onchange = () => console.log("nome", "change", nome.value);
  salada.onchange = () => console.log("salada", "change", salada.value);
  let eventoMolho = () => {
    console.log("molho1", "change", molho1.checked);
    console.log("molho2", "change", molho2.checked);
    console.log("molho3", "change", molho3.checked);
  };
  molho1.onchange = eventoMolho;
  molho2.onchange = eventoMolho;
  molho3.onchange = eventoMolho;
  pao.onchange = () => console.log("pao", "change", pao.checked);
  sobremesa.onchange = () =>
    console.log("sobremesa", "change", sobremesa.checked);
};
