

const dadosFilmes =[
    {
        "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
        "id": 338953,
        "original_language": "en",
        "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
        "overview": "O professor Alvo Dumbledore sabe que o poderoso mago das trevas Gellert Grindelwald está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?",
        "popularity": 3670.155,
        "poster_path": "/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg",
        "release_date": "2022-04-06",
        "title": "Animais Fantásticos: Os Segredos de Dumbledore",
        "vote_average": 6.9,
    },
    {
        "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      
        "id": 675353,
        "original_language": "en",
        "original_title": "Sonic the Hedgehog 2",
        "overview": "Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.",
        "popularity": 3268.177,
        "poster_path": "/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg",
        "release_date": "2022-03-30",
        "title": "Sonic 2: O Filme",
        "vote_average": 7.7,
    },
    {
        "backdrop_path": "/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg",
        "id": 507086,
        "original_language": "en",
        "original_title": "Jurassic World Dominion",
        "overview": "Quatro anos após a destruição da Ilha Nublar, os dinossauros agora vivem – e caçam – ao lado de humanos em todo o mundo. Esse frágil equilíbrio remodelará o futuro e determinará, de uma vez por todas, se os seres humanos continuarão sendo os principais predadores em um planeta que agora compartilham com as criaturas mais temíveis da história.",
        "popularity": 2440.155,
        "poster_path": "/rvX8f3QuUkYtirO0hL9CoeXMzkv.jpg",
        "release_date": "2022-06-01",
        "title": "Jurassic World: Domínio",
        "vote_average": 6.7,
    },
    {
        "backdrop_path": "/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
        "id": 414906,
        "original_language": "en",
        "original_title": "The Batman",
        "overview": "Após dois anos espreitando as ruas como Batman e aterrorizando o mundo do crime, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com pouquíssimos aliados confiáveis dentro da rede corrupta de autoridades e grandes figuras da cidade, o vigilante solitário se estabeleceu como a personificação da vingança para a população.Agora, quando um assassino tem a elite de Gotham vítima de uma série de tramas sadistas, a trilha de pistas crípticas leva o Maior Detetive do Mundo em uma investigação no submundo, onde encontra Carmine Falcone, Selina Kyle, vulga Mulher-Gato, Oswald Cobblepot, vulgo Pinguim, e Edward Nashton, vulgo Charada. Conforme as evidências atingem um nível pessoal e a dimensão dos planos do responsável se torna mais clara, o Batman deve forjar novas alianças, desmascarar o culpado e trazer justiça ao abuso de poder e corrupção que a tanto tempo atormenta Gotham City.",
        "popularity": 1588.662,
        "poster_path": "/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
        "release_date": "2022-03-01",
        "title": "Batman",
        "vote_average": 7.8,
    },
    {
        "backdrop_path": "/hGr0FrLI74vqpBWTBOPloDBwOAK.jpg",
        "id": 705861,
        "original_language": "en",
        "original_title": "Hustle",
        "overview": "Um olheiro de basquete azarado encontra um jogador com potencial de sucesso e se esforça para provar que ambos merecem chegar à NBA.",
        "popularity": 1325.419,
        "poster_path": "/25aPHMlZNP5F3fgxUo4XB7xUVz7.jpg",
        "release_date": "2022-06-03",
        "title": "Arremessando Alto",
        "vote_average": 7.8,
    },
    {
        "backdrop_path": "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
        "id": 335787,
        "original_language": "en",
        "original_title": "Uncharted",
        "overview": "Nathan Drake e seu parceiro canastrão Victor \"Sully\" Sullivan embarcam em uma perigosa busca para encontrar o maior tesouro jamais encontrado. Enquanto isso, eles também rastreiam pistas que podem levar ao irmão perdido de Nathan.",
        "popularity": 1620.457,
        "poster_path": "/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg",
        "release_date": "2022-02-10",
        "title": "Uncharted: Fora do Mapa",
        "vote_average": 7.1,
    }
    
];
const mostraFilme=(data)=>{
    let dadosHTML =' ';
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem('db_filmes', data.target.response)

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


const init = () =>{
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=570a63a7469699a35fc878315431ff58&language=pt-BR";
    xhr.onload = mostraFilme;
    xhr.oneerror=
    xhr.open('GET',url, true);
    xhr.send();
}

pesquisar=()=>{
    window.location='pesquisados.html?query='+document.getElementById('txtPesquisa').value
}

document.body.onload= init;














