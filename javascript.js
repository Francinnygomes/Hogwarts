let listaCasas = [
    {
        "nome": "Grifinória",
        "img": "img/grifinoria.jpg",
        "descricao": "A casa dos corajosos, aventureiros e leais. Os alunos da Grifinória são conhecidos pela honra, ousadia e determinação, mas podem ser imprudentes. O símbolo da Grifinória é um leão e as cores são vermelho e amarelo-dourado.",
    },
    {
        "nome": "Sonserina",
        "img": "img/sonserina.jpg",
        "descricao": "A casa dos astutos, ambiciosos e orgulhosos. Os alunos da Sonserina são apaixonados pelas atividades que assumem e são capazes de tudo para atingir seus objetivos. A Sonserina é simbolizada por uma cobra e pelas cores verde e prata.",
    },
    {
        "nome": "Corvinal",
        "img": "img/corvinal.jpg",
        "descricao": "A casa dos inteligentes, sábios e criativos. Os alunos da Corvinal são caracterizados pela inteligência, aprendizado, lógica e facilidade em ouvir, aprender e dialogar.",
    },
    {
        "nome": "Lufa-Lufa",
        "img": "img/lufa-lufa.jpg",
        "descricao": "A casa dos leais, justos, pacientes, sinceros e trabalhadores. Os alunos da Lufa-Lufa são verdadeiros e não têm medo da dor. A casa Lufa-Lufa é representada pelo elemento Terra e as cores são amarelo e preto.",
    },
]

listaCasas.map((casa, posicao)=> {
    let cardCasa = document.getElementById("cards");
    cardCasa.innerHTML += `
                <div class="col-md-3">
                <div class="card m-2">
                    <img src="${casa.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${casa.nome}</h5>
                      <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class=" bi bi-zoom-in"></i></a>
                    </div>
                  </div>
            </div>
    `
})

function zoomImg(posicao){
    let casaSelecionada = listaCasas[posicao];
    document.getElementById("nomeCasa").innerHTML = casaSelecionada.nome;
    document.getElementById("descricaoCasa").innerHTML = casaSelecionada.descricao;
    document.getElementById("imgModal").src = casaSelecionada.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }   
}