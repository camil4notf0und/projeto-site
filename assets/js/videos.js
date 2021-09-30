var videos = document.getElementsByClassName("videos__video");
var titulosOffCanvas = document.getElementById("offcanvas-title-segundo-plano");
var botaoOffCanvas = document.getElementById("botaoAbreOffCanvas");
var offCanvasDois = document.getElementById("offcanvasScrollingDois");
var panoDeFundo = document.getElementById("panoDeFundo");
var tocando = false;
var qualTocando, videoSelecionado, i;
var divPlayers = document.getElementsByClassName("video-player");


var caixaDePesquisa = document.querySelector(".caixa-de-pesquisa");


var fullScreen = 0;


var qualVideo = 0;

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
      var abrirAvisoVar = videos[qualVideoLocal].getAttribute("data-abrir-aviso");
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



caixaDePesquisa.addEventListener("input", function() {
  

  const pesquisa = this.value;

  const pesquisador = new RegExp(pesquisa, "i");

  [...videos].forEach((video) => {
    video.classList.add("inicio-videos");
    video.classList.add("nao-aparece");

    let titulo = video.querySelector(".video__titulo").textContent;

    if(pesquisador.test(titulo)) {
      video.classList.remove("nao-aparece");
    }

    animacao = 0;
  });
});