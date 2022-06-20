
const mostraFilme=(data)=>{
    let dadosHTML =' ';
    let dadosFilmes = JSON.parse(data)
    localStorage.setItem('db_filmes', data)

    for(let i= 0; i<dadosFilmes.results.length;i++){
        let filme = dadosFilmes.results[i];
        dadosHTML+=`
        <div class="row col-3" id="ListaFilmes" >

            <div id="movies" class="card col-sm-10 "  >
                 <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Card image cap">
                 <div class="card-body">
                     <h5 class="card-title">${filme.title}</h5>
                     <a href="detalhes.html?id=${filme.id}" class="btn btn-dark">Detalhes</a>
                 </div>
            </div>
     </div>`;
    }
    document.getElementById('ListaFilmes').innerHTML = dadosHTML
}
const mostraErro=(data)=>{
    alert('erro na requisição');
}

function executaPesquisa(){
        const params = new URLSearchParams(location.search)
        let query = params.get('query');

    let = xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.themoviedb.org/3/search/movie?api_key=570a63a7469699a35fc878315431ff58&language=pt-BR&query='+ query);
    xhr.onload = function(e) {
        var arraybuffer = xhr.response; // não é responseText
        mostraFilme(xhr.response);
        /* ... */
    }
    xhr.send();
}

