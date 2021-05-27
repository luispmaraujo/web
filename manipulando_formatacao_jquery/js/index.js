// $(document).ready(function () {
//   .css("width", "100px");
//   $("#caixa").css("height", "100px");
//   $("#caixa").css("border", "thin solid black");
//   $("#caixa").css("background-color", "#ddd");
//   $("#caixa").css("font-family", "monospace");
// });

// $(document).ready(function () {
//   $("#caixa")
//     .html("<p>Olá!</p>")
//     .css("width", "100px")
//     .css("height", "100px")
//     .css("border", "thin solid black")
//     .css("background-color", "#ddd")
//     .css("font-family", "monospace");
// });

$(document).ready(function () {
  $("#caixa").html("<p>Olá!</p>");
  $("#btn").click(function () {
    console.log($("#caixa").hasClass("vermelhinho"));
    $("#caixa").addClass("vermelhinho");
  });

  $("#btn2").click(function () {
    console.log($("#caixa").hasClass("vermelhinho"));
    $("#caixa").removeClass("vermelhinho");
  });

  $("#btn3").click(function () {
    console.log($("#caixa").hasClass("vermelhinho"));
    $("#caixa").toggleClass("vermelhinho");
  });
});
