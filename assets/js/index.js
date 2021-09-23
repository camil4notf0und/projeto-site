var animacao = 0;

var scroll;
window.addEventListener("scroll", function (event) {
    scroll = this.scrollY;
});

var pagCarregou = false;

window.onload = function () {
    pagCarregou = true;
};

function apareceVideos() {
    if(scroll >= 400 && pagCarregou == true && animacao < videos.length) {
        if(videos.length % 3 == 0) {
            videos[animacao].classList.remove("inicio-videos");
            animacao++;
            videos[animacao].classList.remove("inicio-videos");
            animacao++;
            videos[animacao].classList.remove("inicio-videos");
            animacao++;
        }else {
            videos[animacao].classList.remove("inicio-videos");
            videos[animacao].classList.add("final-videos");
            videos[animacao].classList.remove("desfoca");
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
    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "flow-podcast") {
            videos[f].style.display = "block";
        }else if(podcast == "podpah") {
            videos[f].style.display = "none";
        }else if(podcast == "ciencia-sem-fim") {
            videos[f].style.display = "none";
        }
    }
}

function podpah() {
    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "flow-podcast") {
            videos[f].style.display = "none";
        }else if(podcast == "podpah") {
            videos[f].style.display = "block";
        }else if(podcast == "ciencia-sem-fim") {
            videos[f].style.display = "none";
        }
    }
}

function cienciaSemFim() {
    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        let podcast = videos[f].getAttribute("data-podcast");
        if(podcast == "flow-podcast") {
            videos[f].style.display = "none";
        }else if(podcast == "podpah") {
            videos[f].style.display = "none";
        }else if(podcast == "ciencia-sem-fim") {
            videos[f].style.display = "block";
        }
    }
}

function todos() {
    [...videos].forEach(e => {
        e.classList.add("inicio-videos");
    });
    animacao = 0;
    for(let f = 0; f < videos.length; f++) {
        videos[f].style.display = "block";
    }   
}