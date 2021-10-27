var videos = document.getElementsByClassName("videos__video");
var videosFundo = document.getElementsByClassName("video__fundo");
var containerAcoesVideos = document.getElementById("acoes-videos");
var titulosOffCanvas = document.getElementById("offcanvas-title-segundo-plano");
var botaoOffCanvas = document.getElementById("botaoAbreOffCanvas");
var offCanvasDois = document.getElementById("offcanvasScrollingDois");
var panoDeFundo = document.getElementById("panoDeFundo");
var tocando = false;
var qualTocando, videoSelecionado, i;
var divPlayers = document.getElementsByClassName("video-player");

const filtro = document.getElementById("filtro");
var colapsado = false;




var ouvirVideo = document.querySelectorAll(".video__fundo .fa-headphones");

var caixaDePesquisa = document.querySelector(".caixa-de-pesquisa");



var botoesVelocidade = document.getElementsByClassName("velocidade-video");


var fullScreen = 0;


var animacao = 0;
// window.addEventListener("scroll", function (event) {

window.onload = function () {
    document.querySelector(".videos-chamada").classList.remove("inicio-videos");
    setTimeout(() => {
    });
    let videoAtual, tamanhoVideo, posicaoVideo, posicaoDesejada;
        tamanhoVideo = videoAtual.getBoundingClientRect()["height"];
    }
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
        
        videoAtual.classList.remove("inicio-videos");
        animacao++;
        if(videoAtual.classList.contains("nao-aparece")) {
          apareceVideos();
        }
    }
}

setInterval(apareceVideos, 250);







=======
>>>>>>> f79c64bc4a8198e0c05feba7169dd6c42ccd5ed1
[...videos].forEach((video) => {
  var qualVideoLocal = qualVideo;
  video.addEventListener("click", () => {
    if(tocando == false) {
      qualTocando = qualVideoLocal;
      tocando = true;
      maximixaMinimiza = 0;
      botoesVelocidade[qualTocando].value = `${players[qualTocando].getPlaybackRate()}`;
      videos[qualTocando].setAttribute("data-assistido", "true");

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
  elemento.title = "Salvar Podcast";
  elemento.addEventListener("click", function() {
    if(this.classList.contains("far")) {
      this.classList.remove("far");
      this.classList.add("fas");
      this.title = "Salvado";

      this.parentNode.parentNode.querySelector(".videos__video").setAttribute("data-salvado", "true");

    }else if(this.classList.contains("fas")) {
      this.classList.remove("fas");
      this.classList.add("far");
      this.title = "Salvar Podcast";

      this.parentNode.parentNode.querySelector(".videos__video").setAttribute("data-salvado", "false");
    }

    if(btnSalvos.querySelector(".fa-bookmark").classList.contains("fas")) {
      btnSalvos.click();
      btnSalvos.click();
    }
  });
});

apagaHistoricoVideo.forEach((elemento) => {
  elemento.title = "Apagar Histórico";
  elemento.addEventListener("click", function() {
    let video = this.parentNode.parentNode.querySelector(".videos__video");

    video.setAttribute("data-assistido", "false");

    btnAssistidos.click();
    btnAssistidos.click();
  })
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
  containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    btnAssistidos.querySelector(".fa-clock").classList.remove("fas");
    btnAssistidos.querySelector(".fa-clock").classList.add("far");

    [...apagaHistoricoVideo].forEach((e) => {
      e.classList.add("nao-aparece");
    });
  }
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "flow-podcast" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "flow-podcast" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }
}

function podpah() {
  containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    btnAssistidos.querySelector(".fa-clock").classList.remove("fas");
    btnAssistidos.querySelector(".fa-clock").classList.add("far");

    [...apagaHistoricoVideo].forEach((e) => {
      e.classList.add("nao-aparece");
    });
  }
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "podpah" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "podpah" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }
}

function cienciaSemFim() {
  containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    btnAssistidos.querySelector(".fa-clock").classList.remove("fas");
    btnAssistidos.querySelector(".fa-clock").classList.add("far");

    [...apagaHistoricoVideo].forEach((e) => {
      e.classList.add("nao-aparece");
    });
  }
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "ciencia-sem-fim" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "ciencia-sem-fim" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }
}

function balela() {
  containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    btnAssistidos.querySelector(".fa-clock").classList.remove("fas");
    btnAssistidos.querySelector(".fa-clock").classList.add("far");

    [...apagaHistoricoVideo].forEach((e) => {
      e.classList.add("nao-aparece");
    });
  }
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;

          if(podcast == "balela" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let podcast = videos[f].getAttribute("data-podcast");
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(podcast == "balela" && salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }
}

function todos() {
  containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    btnAssistidos.querySelector(".fa-clock").classList.remove("fas");
    btnAssistidos.querySelector(".fa-clock").classList.add("far");

    [...apagaHistoricoVideo].forEach((e) => {
      e.classList.add("nao-aparece");
    });
  }
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("far")) {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
        let titulo = videos[f].title;

        if(pesquisador.test(titulo)) {
            videosFundo[f].classList.remove("nao-aparece");
        }else {
          videosNaoAparece++;
        }
        if(videosNaoAparece == videos.length) {
          containerAcoesVideos.classList.remove("nao-aparece");
          containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
        }else {
          containerAcoesVideos.classList.add("nao-aparece");
          containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
        }
      }

      animacao = 0;
  }else {
      

      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let titulo = videos[f].title;
          let salvado = videos[f].getAttribute("data-salvado");

          if(salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
  }
}



btnSalvos.addEventListener("click", function() {
  let bookmark = this.querySelector(".fa-bookmark");
  containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    btnAssistidos.click();
  }

  if(bookmark.classList.contains("far")) {
    bookmark.classList.remove("far");
    bookmark.classList.add("fas");

    

    if(filtro.value == "todos") {
      [...videosFundo].forEach(e => {
          e.classList.add("inicio-videos");
          e.classList.add("nao-aparece");
      });
      animacao = 0;
      let videosNaoAparece = 0;
      for(let f = 0; f < videos.length; f++) {
          let salvado = videos[f].getAttribute("data-salvado");
          let titulo = videos[f].title;
  
          if(salvado == "true" && pesquisador.test(titulo)) {
              videosFundo[f].classList.remove("nao-aparece");
          }else {
            videosNaoAparece++;
          }
          if(videosNaoAparece == videos.length) {
            containerAcoesVideos.classList.remove("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
          }else {
            containerAcoesVideos.classList.add("nao-aparece");
            containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
          }
      }
    }else {
      let filtroSelecionado = filtro.value;

      if(filtroSelecionado == "flow podcast") {
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

btnAssistidos.addEventListener("click", () => {
  if(btnSalvos.querySelector(".fa-bookmark").classList.contains("fas")) {
    btnSalvos.click();
  }

  filtro.value = "todos";

  caixaDePesquisa.value = "";
  pesquisador = new RegExp("", "i");

  if(btnAssistidos.querySelector(".fa-clock").classList.contains("fas")) {
    containerAcoesVideos.classList.add("nao-aparece");
    containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");

    let videosNaoAparece = 0;
    btnAssistidos.querySelector(".fa-clock").classList.remove("fas");
    btnAssistidos.querySelector(".fa-clock").classList.add("far");
    [...videosFundo].forEach(e => {
      e.classList.add("inicio-videos");
      e.classList.remove("nao-aparece");

      e.querySelector(".fa-trash").classList.add("nao-aparece");
    });


    animacao = 0;
  }else {
    containerAcoesVideos.classList.remove("nao-aparece");
    containerAcoesVideos.querySelector(".apagar-historico").classList.remove("nao-aparece");

    btnAssistidos.querySelector(".fa-clock").classList.remove("far");
    btnAssistidos.querySelector(".fa-clock").classList.add("fas");
    [...videosFundo].forEach(e => {
      e.classList.add("inicio-videos");
      e.classList.add("nao-aparece");

      e.querySelector(".fa-trash").classList.remove("nao-aparece");
    });
    animacao = 0;
    let videosNaoAparece = 0;
    for(let f = 0; f < videos.length; f++) {
      let assistido = videos[f].getAttribute("data-assistido");
      // let titulo = videos[f].title;
  //  && pesquisador.test(titulo)
      if(assistido == "true") {
          videosFundo[f].classList.remove("nao-aparece");
      }else {
        videosNaoAparece++;
      }
      if(videosNaoAparece == videos.length) {
        containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.remove("nao-aparece");
        containerAcoesVideos.querySelector(".apagar-historico").classList.add("nao-aparece");
      }else {
        containerAcoesVideos.querySelector(".nenhum-video-encontrado").classList.add("nao-aparece");
        containerAcoesVideos.querySelector(".apagar-historico").classList.remove("nao-aparece");
      }
    }
  }
});

containerAcoesVideos.querySelector(".apagar-historico").addEventListener("click", () => {
  [...videos].forEach((video) => {
    video.setAttribute("data-assistido", "false");
  });

  btnAssistidos.click();
  btnAssistidos.click();
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
