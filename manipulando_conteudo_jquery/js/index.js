//Botões e contador

$(document).ready(function () {
  $("#menos1").click(function () {
    let valor = parseInt($("#contador").text());
    valor--;
    if (valor >= 0) $("#contador").text(valor);
    if (valor == 0) $("#menos1").prop("disabled", true);
  });

  $("#mais1").click(function () {
    let valor = parseInt($("#contador").text());
    valor++;
    $("#contador").text(valor);
    $("#menos1").prop("disabled", false);
  });
});

//Inserindo uma Lista

$(document).ready(function () {
  $("#mais1").click(function () {
    $("#lista").append($("<li>Item</li>"));
  });
});

//Inserindo uma Imagem

$(document).ready(function () {
  let img = $("<img />", {
    id: "foto",
    alt: "Foto do Picsum",
    src: "https://picsum.photos/200",
  });

  $("#p1").append(img);
});

//Inserindo um novo parágrafo

$(document).ready(function () {
  let paragrafo = $("<p></p>", {
    id: "p2",
    html: "Novo parágrafo em branco",
  });

  $("#div1").append(paragrafo);
});

// attr e prop

$(document).ready(function () {
    $("#teste").click (function () {
        console.log("attr", $("#campo").attr("value"));
        console.log("prop", $("#campo").prop("value"));
    });
  });
