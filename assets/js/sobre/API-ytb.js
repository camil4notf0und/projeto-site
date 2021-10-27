// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var playerDois;
var playerTres;
var playerQuatro;
var playerCinco;
var playerSeis;

var players;


var pauseEplay = 0;

var temposVideos = document.getElementsByClassName("tempo-video");

/**
var botoesPulaParaTras = document.getElementsByClassName("fa-backwardVideo");
var botoesPausa = document.getElementsByClassName("fa-pauseVideo");
var botoesPlay = document.getElementsByClassName("fa-playVideo");
var botoesPulaParaFrente = document.getElementsByClassName("fa-forwardVideo");
var botoesFullScreen = document.getElementsByClassName("fa-full-screen");
*/
var botoesPulaParaTras = document.getElementById("fa-backwardVideo");
var botoesPausa = document.getElementById("fa-pauseVideo");
var botoesPlay = document.getElementById("fa-playVideo");
var botoesPulaParaFrente = document.getElementById("fa-forwardVideo");
var botoesFullScreen = document.getElementById("fa-full-screen");

var tempoVideo = document.getElementById("tempo-video");

var btnsFechaModal = document.getElementsByClassName("fecha-modal");
var btnsFechaOffCanvas = document.getElementsByClassName("fechaOffCanvas")

var btnContinuarOuvindo = document.getElementById("btn-continua-ouvindo");
var btnOuvirVideoSelecionado = document.getElementById("btn-ouvir-selecionado");

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'tHbFukPmM9s',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
  playerDois = new YT.Player('playerDois', {
    height: '100%',
    width: '100%',
    videoId: 'k3n8DH_EktY',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
  playerTres = new YT.Player('playerTres', {
    height: '100%',
    width: '100%',
    videoId: 'FuLKxGdYOPk',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
  playerQuatro = new YT.Player('playerQuatro', {
    height: '100%',
    width: '100%',
    videoId: 'IVZ8F6GEqaA',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
  playerCinco = new YT.Player('playerCinco', {
    height: '100%',
    width: '100%',
    videoId: 'vStgnVQtyeA',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
  playerSeis = new YT.Player('playerSeis', {
    height: '100%',
    width: '100%',
    videoId: 'fcdDbBJ-abc',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
  playerSete = new YT.Player('playerSete', {
    height: '100%',
    width: '100%',
    videoId: 'FY3ZeJu9pj0',
    playerVars: {
      controls: '0',
      rel: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}


// 4. The API will call this function when the video player is ready.


function onPlayerReady(event) {
  players = [player, playerDois, playerTres, playerQuatro, playerCinco, playerSeis, playerSete];
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.


botoesPausa.style.display = "none";


function tocarVideo() {
  players[qualTocando].playVideo();
}

function pararVideo() {
  players[qualTocando].stopVideo();
}

function pausarVideo() {
  players[qualTocando].pauseVideo();
}
function playEPause() {
  if(pauseEplay == 0) {
    botoesPlay.style.display = "none";
    botoesPausa.style.display = "block";
    tocarVideo();
    pauseEplay = 1;
  }else {
    botoesPlay.style.display = "block";
    botoesPausa.style.display = "none";
    pausarVideo();
    pauseEplay = 0;
  }
}

var tempoAtual;
var tempoTotal;
function pegaTempoVideo() {
  tempoAtual = players[qualTocando].getCurrentTime();
}

function pegaTempoTotalVideo() {
  tempoTotal = players[qualTocando].getDuration();
}

function pulaParaTrasVideo() {
  pegaTempoVideo();
  players[qualTocando].seekTo(tempoAtual - 10);
}

function pulaParaFrenteVideo() {
  pegaTempoVideo();
  players[qualTocando].seekTo(tempoAtual + 10);
}
function fechaModal() {
  setTimeout(segundoPlano, 350);
  pararVideo();
  pauseEplay = 0;
  btnsFechaOffCanvas[0].click();
  tocando = false;
}

btnsFechaOffCanvas[1].addEventListener("click", () => {
  setTimeout(segundoPlano, 350);
});

function continuaOuvindo() {
  btnsFechaOffCanvas[1].click();
}


function ouvirVideoSelecionado() {
  botaoAviso.click();
  fechaModal();
  setTimeout(() => {
    segundoPlano();
    videos[videoSelecionado].click();
  }, 350);
}


function abreVideoSelecionado() {
  setTimeout(segundoPlano, 350);
  videos[videoSelecionado].click();
}



btnsFechaOffCanvas[0].onclick = fechaModal;


botoesPulaParaTras.addEventListener("click", pulaParaTrasVideo);

botoesPlay.addEventListener("click", playEPause);

botoesPausa.addEventListener("click", playEPause);

botoesPulaParaFrente.addEventListener("click", pulaParaFrenteVideo)


/**

function telaCheia() {
  /** 
  if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

  if(fullScreen == 0) {
    let modalDialog = document.getElementsByClassName("modal-dialog")[qualTocando];
    let modalContent = document.getElementsByClassName("modal-content")[qualTocando];
    let cabecalho = document.getElementsByClassName("modal-header")[qualTocando];
    let rodape = document.getElementsByClassName("modal-footer")[qualTocando];

    modalDialog.classList.add("full-screen");

    modalContent.classList.add("full-screen-content");

    cabecalho.classList.add("nao-aparece");

    rodape.classList.add("sem-padding");

    iconesFullScreen[qualTocando].classList.remove("fa-expand");
    iconesFullScreen[qualTocando].classList.add("fa-compress");


    fullScreen = 1;
  }else {
    let modalDialog = document.getElementsByClassName("modal-dialog")[qualTocando];
    let modalContent = document.getElementsByClassName("modal-content")[qualTocando];
    let cabecalho = document.getElementsByClassName("modal-header")[qualTocando];
    let rodape = document.getElementsByClassName("modal-footer")[qualTocando];

    modalDialog.classList.remove("full-screen");

    modalContent.classList.remove("full-screen-content");

    cabecalho.classList.remove("nao-aparece");

    rodape.classList.remove("sem-padding");

    iconesFullScreen[qualTocando].classList.add("fa-expand");
    iconesFullScreen[qualTocando].classList.remove("fa-compress");

    fullScreen = 0;
  }
}

function mudaTempoVideo() {

}
*/

function tempoVideos() {
  if(tocando == true) {
    pegaTempoVideo();
    pegaTempoTotalVideo();
    let spanSegundosSegundoPlanoAtual = temposVideos[0].querySelector(".segundos-atual");
    let spanMinutosSegundoPlanoAtual = temposVideos[0].querySelector(".minutos-atual");
    let spanHorasSegundoPlanoAtual = temposVideos[0].querySelector(".horas-atual");

    let spanSegundosSegundoPlanoTotal = temposVideos[0].querySelector(".segundos-total");
    let spanMinutosSegundoPlanoTotal = temposVideos[0].querySelector(".minutos-total");
    let spanHorasSegundoPlanoTotal = temposVideos[0].querySelector(".horas-total");


    let [segundosAtual, minutosAtual, horasAtual] = [tempoAtual, 0, 0];

    while(segundosAtual >= 60) {
      minutosAtual++;

      segundosAtual = segundosAtual - 60;
    }

    while(minutosAtual >= 60) {
        horasAtual++;

        minutosAtual = minutosAtual - 60;
    }
    
    
  
    if(segundosAtual < 10) {
      spanSegundosSegundoPlanoAtual.textContent = "0" + parseInt(segundosAtual);
    }else {
      spanSegundosSegundoPlanoAtual.textContent = parseInt(segundosAtual);
    }
    if(minutosAtual < 10) {
      spanMinutosSegundoPlanoAtual.textContent = "0" + parseInt(minutosAtual);
    }else {
      spanMinutosSegundoPlanoAtual.textContent = parseInt(minutosAtual);
    }
    if(horasAtual < 10) {
      spanHorasSegundoPlanoAtual.textContent = "0" + parseInt(horasAtual);
    }else {
      spanHorasSegundoPlanoAtual.textContent = parseInt(horasAtual);
    }


    let [segundosTotal, minutosTotal, horasTotal] = [tempoTotal, 0, 0];

    while(segundosTotal >= 60) {
      minutosTotal++;

      segundosTotal = segundosTotal - 60;
    }

    while(minutosTotal >= 60) {
        horasTotal++;

        minutosTotal = minutosTotal - 60;
    }

    if(segundosTotal < 10) {
      spanSegundosSegundoPlanoTotal.textContent = "0" + parseInt(segundosTotal);
    }else {
      spanSegundosSegundoPlanoTotal.textContent = parseInt(segundosTotal);
    }
    if(minutosTotal < 10) {
      spanMinutosSegundoPlanoTotal.textContent = "0" + parseInt(minutosTotal);
    }else {
      spanMinutosSegundoPlanoTotal.textContent = parseInt(minutosTotal);
    }
    if(horasTotal < 10) {
      spanHorasSegundoPlanoTotal.textContent = "0" + parseInt(horasTotal);
    }else {
      spanHorasSegundoPlanoTotal.textContent = parseInt(horasTotal);
    }
  }

}

setInterval(tempoVideos, 1);

/**
[...temposVideos].forEach((e) => {
  e.addEventListener("click", mudaTempoVideo);
});

[...botoesFullScreen].forEach(e => {
  e.addEventListener("click", telaCheia);
});
 */
btnContinuarOuvindo.onclick = continuaOuvindo;
btnOuvirVideoSelecionado.onclick = ouvirVideoSelecionado;

/**
var cursor;
[...divPlayers].forEach(div => {
  div.addEventListener("click", playEPause);
  div.addEventListener("dblclick", telaCheia);
  div.addEventListener("mousemove", function() {
    clearTimeout(cursor);
    this.classList.remove("sem-cursor");
    cursor = setTimeout(() => {
      this.classList.add("sem-cursor");
    }, 3000);
  });
});


ouvirVideo.forEach((elemento) => {
  elemento.addEventListener("click", function() {
    let video = this.parentNode.parentNode.querySelector(".videos__video");
    let abrirAvisoVar = video.getAttribute("data-abrir-aviso");

    if(abrirAvisoVar == "false") {
      video.click();
      setTimeout(() => {
        btnsMinimiza[qualTocando].click();
      }, 500);
    }else if(abrirAvisoVar == "true") {
      video.click();
    }
  });
});
*/


function adicionaVideo() {
  /**
  let player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'tHbFukPmM9s',
    playerVars: {
      controls: '0',
      rel: '0'
    }
  });


  let qualVideoLocal = qualVideo;
  player.addEventListener("click", () => {
    if(tocando == false) {
      qualTocando = qualVideoLocal;
      tocando = true;
      for (i = 0; i < titulosOffCanvas.length; i++) {
        titulosOffCanvas[i].classList.add("d-none");
      }
      titulosOffCanvas[qualTocando].classList.remove("d-none");
      playEPause();
    }else {
      var abrirAvisoVar = videos[qualVideoLocal].getAttribute("data-abrir-aviso");
      if(abrirAvisoVar == "true") {
        abreAviso();
        videoSelecionado = qualVideoLocal;
      }
      if(abrirAvisoVar == "false") {
        botaoOffCanvas.click();
      }
    }
  });
  qualVideo++;

  players.push(player);
  */
 void(0);
}