const API_KEY = '2a534ff28b1cbcfcd9b0670be1e43c34';

function exibirFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let filme = dados.articles[i];
        let data = new Date (filme.publishedAt);

        texto = texto + ``;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function exibirFilmes () {
    let query = document.getElementById('termoPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibirFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/550?api_key=2a534ff28b1cbcfcd9b0670be1e43c34`);
    xhr.send ();
}

document.getElementById ('botao-pesquisar').addEventListener ('click', executaPesquisa);