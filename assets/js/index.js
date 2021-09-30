var animacao = 0;

// var scroll;
// window.addEventListener("scroll", function (event) {
//     scroll = this.scrollY;
// });

var pagCarregou = false;

window.onload = function () {
    pagCarregou = true;
};

function apareceVideos() {
    let videoAtual, tamanhoVideo, posicaoVideo, posicaoDesejada;
    if(animacao < videos.length) {
        videoAtual = videos[animacao];
        tamanhoVideo = videoAtual.getBoundingClientRect()["height"];
        posicaoVideo = window.innerHeight - videoAtual.getBoundingClientRect()["y"];
        posicaoDesejada = tamanhoVideo / 2;
    }

    if(posicaoDesejada <= posicaoVideo && pagCarregou == true && animacao < videos.length) {
        if(videos.length % 3 == 0) {
            videoAtual.classList.remove("inicio-videos");
            animacao++;
            videoAtual.classList.remove("inicio-videos");
            animacao++;
            videoAtual.classList.remove("inicio-videos");
            animacao++;
        }else {
            videoAtual.classList.remove("inicio-videos");
            videoAtual.classList.add("final-videos");
            videoAtual.classList.remove("desfoca");
            animacao++;
        }
    }
}

setInterval(apareceVideos, 250);




var botaoAviso = document.getElementById("botaoAbreAviso");

botaoAviso.addEventListener("click", segundoPlano);
botaoOffCanvas.addEventListener("click", segundoPlano);

var btnsMinimiza = document.getElementsByClassName("btn-minimiza");
var btnMaximiza = document.getElementsByClassName("btn-maximiza")[0];



function abreOffCanvas() {
    maximixaMinimiza = 1;
    teclaMPressionada = false;
    segundoPlano();
    botaoOffCanvas.click();
    let idModal = document.getElementsByClassName("modal")[qualTocando].id;
    btnMaximiza.setAttribute("data-bs-target", "#" + idModal);
}
function maximiza() {
    maximixaMinimiza = 0;
    teclaMPressionada = false;
    botaoOffCanvas.click();
}
function abreAviso() {
    botaoAviso.click();
    let idModal = document.getElementsByClassName("modal")[qualTocando].id;
    btnContinuarAssistindo.setAttribute("data-bs-target", "#" + idModal);
}

[...btnsMinimiza].forEach(e => {
    e.addEventListener("click", abreOffCanvas);
}); 

btnMaximiza.onclick = maximiza;


function flowPodcast() {
    caixaDePesquisa.value = "";

    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
        e.classList.add("nao-aparece");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "flow-podcast") {
            videos[f].classList.remove("nao-aparece");
        }
    }
}

function podpah() {
    caixaDePesquisa.value = "";

    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
        e.classList.add("nao-aparece");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "podpah") {
            videos[f].classList.remove("nao-aparece");
        }
    }
}

function cienciaSemFim() {
    caixaDePesquisa.value = "";

    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
        e.classList.add("nao-aparece");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "ciencia-sem-fim") {
            videos[f].classList.remove("nao-aparece");
        }
    }
}

function balela() {
    caixaDePesquisa.value = "";

    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
        e.classList.add("nao-aparece");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "balela") {
            videos[f].classList.remove("nao-aparece");
        }
    }
}

function todos() {
    caixaDePesquisa.value = "";

    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
        e.classList.remove("nao-aparece")
    });
    animacao = 0;
}