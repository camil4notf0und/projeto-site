var videos = document.getElementsByClassName("videos__video");
var videosFundo = document.getElementsByClassName("video__fundo");
var titulosOffCanvas = document.getElementById("offcanvas-title-segundo-plano");
var botaoOffCanvas = document.getElementById("botaoAbreOffCanvas");
var offCanvasDois = document.getElementById("offcanvasScrollingDois");
var panoDeFundo = document.getElementById("panoDeFundo");
var tocando = false;
var qualTocando, videoSelecionado, i;
var divPlayers = document.getElementsByClassName("video-player");

const filtro = document.getElementById("filtro");
var colapsado = false;

var btnSalvos = document.getElementById("btn-salvos");
var salvaVideo = document.querySelectorAll(".video__fundo .fa-bookmark");

var botaoAviso = document.getElementById("botaoAbreAviso");



var btnsMinimiza = document.getElementsByClassName("btn-minimiza");
var btnMaximiza = document.getElementsByClassName("btn-maximiza")[0];



var ouvirVideo = document.querySelectorAll(".video__fundo .fa-headphones");;

var caixaDePesquisa = document.querySelector(".caixa-de-pesquisa");


var fullScreen = 0;


var qualVideo = 0;


var animacao = 0;

// var scroll;
// window.addEventListener("scroll", function (event) {
//     scroll = this.scrollY;
// });

var pagCarregou = false;

window.onload = function () {
    pagCarregou = true;
    document.querySelector(".videos-chamada .titulo--pesquisa").classList.remove("inicio-videos");
};

function apareceVideos() {
    let videoAtual, tamanhoVideo, posicaoVideo, posicaoDesejada;
    if(animacao < videos.length) {
        videoAtual = videosFundo[animacao];
        tamanhoVideo = videoAtual.getBoundingClientRect()["height"];
        posicaoVideo = window.innerHeight - videoAtual.getBoundingClientRect()["y"];
        posicaoDesejada = tamanhoVideo / 2;
    }

    if(posicaoDesejada <= posicaoVideo && pagCarregou == true && animacao < videos.length) {
        /**
        if(videos.length % 3 == 0) {
            videoAtual.classList.remove("inicio-videos");
            animacao++;
            videoAtual.classList.remove("inicio-videos");
            animacao++;
            videoAtual.classList.remove("inicio-videos");
            animacao++;
        }else {
            videoAtual.classList.remove("inicio-videos");
            videoAtual.classList.remove("desfoca");
            animacao++;
        }
        */
        videoAtual.classList.remove("inicio-videos");
        animacao++;
        if(videoAtual.classList.contains("nao-aparece")) {
          apareceVideos();
        }
    }
}

setInterval(apareceVideos, 250);







[...videos].forEach((video) => {
  var qualVideoLocal = qualVideo;
  video.addEventListener("click", () => {
    if(tocando == false) {
      qualTocando = qualVideoLocal;
      tocando = true;
      maximixaMinimiza = 0;
      let tituloModal = document.getElementsByClassName("modal")[qualTocando].querySelector(".modal-title").textContent;
      if(tituloModal.length <= 28) {
        titulosOffCanvas.textContent = tituloModal;
      }else {
        let quebrado = tituloModal.split("");
        let vezes = quebrado.length;

        for(let i = 0; i < vezes; i++) {
          if(i >= 28) {
            quebrado.splice(i, quebrado.length - 28);
          } 
        }
        let juntado = "";
        quebrado.forEach(letra => {
          juntado += letra;
        });
        juntado += "...";

        titulosOffCanvas.title = tituloModal;
        titulosOffCanvas.textContent = juntado;
      }
      playEPause();
    }else {
      let abrirAvisoVar = videos[qualVideoLocal].getAttribute("data-abrir-aviso");
      if(abrirAvisoVar == "true") {
        abreAviso();
        segundoPlano();
        videoSelecionado = qualVideoLocal;
      }
      if(abrirAvisoVar == "false") {
        botaoOffCanvas.click();
      }
    }
  });
  qualVideo++;

  let videoTitulo = video.querySelector(".video__titulo");

  if(videoTitulo.textContent.length <= 35) {
    videoTitulo.textContent = videoTitulo.textContent;
  }else {
    let quebrado = videoTitulo.textContent.split("");
    let vezes = quebrado.length;

    for(let i = 0; i < vezes; i++) {
      if(i >= 35) {
        quebrado.splice(i, quebrado.length - 35);
      } 
    }
    let juntado = "";
    quebrado.forEach(letra => {
      juntado += letra;
    });
    juntado += "...";

    video.title = videoTitulo.textContent;
    videoTitulo.textContent = juntado;
  }
});


function segundoPlano() {
    var x;
    if(tocando == false) {
          for (x = 0; x < videos.length; x++) {
              videos[x].setAttribute("data-bs-toggle", "modal");
              videos[x].setAttribute("data-abrir-aviso", "false");
          }
    }
    if(tocando == true) {
          for (x = 0; x < videos.length; x++) {
              videos[x].removeAttribute("data-bs-toggle");
              videos[x].setAttribute("data-abrir-aviso", "true");
          }
      videos[qualTocando].setAttribute("data-bs-toggle", "modal");
      videos[qualTocando].setAttribute("data-abrir-aviso", "false");
    }
    let roleOffCanvasDois = offCanvasDois.getAttribute("role");
    if(roleOffCanvasDois == "dialog") {
      panoDeFundo.style.display = "block";
      panoDeFundo.style.opacity = "1";
    }else {
      panoDeFundo.style.opacity = "0";
      panoDeFundo.style.display = "none";
    }
}
segundoPlano();



var pesquisador = new RegExp("", "i");

caixaDePesquisa.addEventListener("input", function() {
  const pesquisa = this.value;

  pesquisador = new RegExp(pesquisa, "i");

  
    // [...videosFundo].forEach((videoFundo) => {
    //   videoFundo.classList.add("inicio-videos");
    //   videoFundo.classList.add("nao-aparece");

    //   let titulo = videoFundo.title;

    //   if(pesquisador.test(titulo)) {
    //     videoFundo.classList.remove("nao-aparece");
    //   }

    //   animacao = 0;
    // });
  
    let filtroSelecionado = filtro.value;

    if(filtroSelecionado == "todos") {
      todos();
    }else if(filtroSelecionado == "flow podcast") {
      flowPodcast();
    }else if(filtroSelecionado == "podpah") {
      podpah();
    }else if(filtroSelecionado == "ciencia sem fim") {
      cienciaSemFim();
    }else if(filtroSelecionado == "balela") {
      balela();
    }
    animacao = 0;
});


salvaVideo.forEach((elemento) => {
  elemento.addEventListener("click", function() {
    if(this.classList.contains("far")) {
      this.classList.remove("far");
      this.classList.add("fas");

      this.parentNode.parentNode.querySelector(".videos__video").setAttribute("data-salvado", "true");

    }else if(this.classList.contains("fas")) {
      this.classList.remove("fas");
      this.classList.add("far");

      this.parentNode.parentNode.querySelector(".videos__video").setAttribute("data-salvado", "false");
    }
  });
});

botaoAviso.addEventListener("click", segundoPlano);
botaoOffCanvas.addEventListener("click", segundoPlano);

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
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "flow-podcast" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "flow-podcast" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }
}

function podpah() {
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "podpah" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "podpah" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }
}

function cienciaSemFim() {
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "ciencia-sem-fim" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "ciencia-sem-fim" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }
}

function balela() {
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "balela" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "balela" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }
}

function todos() {
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });

      for(let f = 0; f < videos.length; f++) {
        let titulo = videos[f].title;

        if(pesquisador.test(titulo)) {
            videosFundo[f].classList.remove("nao-aparece");
        }
      }

      animacao = 0;
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
  }
}



btnSalvos.addEventListener("click", function() {
  let bookmark = this.querySelector(".fa-bookmark");


  if(bookmark.classList.contains("far")) {
    bookmark.classList.remove("far");
    bookmark.classList.add("fas");

    

    if(filtro.value == "todos") {
      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      for(let f = 0; f < videos.length; f++) {
          let salvado = videos[f].getAttribute("data-salvado");
          let titulo = videos[f].title;
  
          if(salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }
      }
    }else {
      let filtroSelecionado = filtro.value;

      if(filtroSelecionado == "todos") {
        todos();
      }else if(filtroSelecionado == "flow podcast") {
        flowPodcast();
      }else if(filtroSelecionado == "podpah") {
        podpah();
      }else if(filtroSelecionado == "ciencia sem fim") {
        cienciaSemFim();
      }else if(filtroSelecionado == "balela") {
        balela();
      }
      animacao = 0;
    }
  }else if(bookmark.classList.contains("fas")) {
    bookmark.classList.remove("fas");
    bookmark.classList.add("far");

    

    let filtroSelecionado = filtro.value;

    if(filtroSelecionado == "todos") {
      todos();
    }else if(filtroSelecionado == "flow podcast") {
      flowPodcast();
    }else if(filtroSelecionado == "podpah") {
      podpah();
    }else if(filtroSelecionado == "ciencia sem fim") {
      cienciaSemFim();
    }else if(filtroSelecionado == "balela") {
      balela();
    }
    animacao = 0;
  }
});



filtro.addEventListener("click", () => {
  if(colapsado == true) {
      let selecionado = filtro.value;
      
          if(selecionado == "todos") {
              todos();
          }else if(selecionado == "flow podcast") {
              flowPodcast();
          }else if(selecionado == "podpah") {
              podpah();
          }else if(selecionado == "ciencia sem fim") {
              cienciaSemFim();
          }else if(selecionado == "balela") {
              balela();
          }
      colapsado = false;
  }else {
      colapsado = true;
  }
});
filtro.addEventListener("blur", () => {
  colapsado = false;
});