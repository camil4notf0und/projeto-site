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





var botoesPulaParaTras = document.getElementsByClassName("fa-backwardVideo");
var botoesPausa = document.getElementsByClassName("fa-pauseVideo");
var botoesPlay = document.getElementsByClassName("fa-playVideo");
var botoesPulaParaFrente = document.getElementsByClassName("fa-forwardVideo");

var btnsFechaModal = document.getElementsByClassName("fecha-modal");
var btnsFechaOffCanvas = document.getElementsByClassName("fechaOffCanvas")

var btnContinuarOuvindo = document.getElementById("btn-continua-ouvindo");
var btnContinuarAssistindo = document.getElementById("btn-continua-assistindo");
var btnOuvirVideoSelecionado = document.getElementById("btn-ouvir-selecionado");
var btnAssistirVideoSelecionado = document.getElementById("btn-assistir-selecionado");

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
}


// 4. The API will call this function when the video player is ready.


function onPlayerReady(event) {
  players = [player, playerDois, playerTres, playerQuatro, playerCinco, playerSeis];
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var i;
for (i = 0; i < botoesPausa.length; i++) {
      botoesPausa[i].style.display = "none";
}

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
    botoesPlay[qualTocando].style.display = "none";
    botoesPausa[qualTocando].style.display = "block";
    botoesPlay[6].style.display = "none";
    botoesPausa[6].style.display = "block";
    tocarVideo();
    pauseEplay = 1;
  }else {
    botoesPlay[qualTocando].style.display = "block";
    botoesPausa[qualTocando].style.display = "none";
    botoesPlay[6].style.display = "block";
    botoesPausa[6].style.display = "none";
    pausarVideo();
    pauseEplay = 0;
  }
}

var tempoAtual;
function pegaTempoVideo() {
  tempoAtual = players[qualTocando].getCurrentTime();
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
  pararVideo();
  pauseEplay = 0;
  btnsFechaOffCanvas[0].click();
  tocando = false;
}


function continuaOuvindo() {
  btnsFechaOffCanvas[1].click();
}

function continuaAssistindo() {
  botaoAviso.click();
}

function ouvirVideoSelecionado() {
  botaoAviso.click();
  fechaModal();
  videos[videoSelecionado].click();
  btnsMinimiza[qualTocando].click();
}


function abreVideoSelecionado() {
  videos[videoSelecionado].click();
}
function assistirVideoSelecionado() {
  botaoAviso.click();
  fechaModal();
  setTimeout(abreVideoSelecionado, 50);
}


[...btnsFechaModal].forEach(e => {
  e.addEventListener("click", fechaModal);
});

btnsFechaOffCanvas[0].onclick = fechaModal;


[...botoesPulaParaTras].forEach(e => {
  e.addEventListener("click", pulaParaTrasVideo)
});

[...botoesPlay].forEach(e => {
  e.addEventListener("click", playEPause)
});

[...botoesPausa].forEach(e => {
  e.addEventListener("click", playEPause)
});

[...botoesPulaParaFrente].forEach(e => {
  e.addEventListener("click", pulaParaFrenteVideo)
});

btnContinuarOuvindo.onclick = continuaOuvindo;
btnContinuarAssistindo.onclick = continuaAssistindo;
btnOuvirVideoSelecionado.onclick = ouvirVideoSelecionado;
btnAssistirVideoSelecionado.onclick = assistirVideoSelecionado;