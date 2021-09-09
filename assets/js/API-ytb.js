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

var tocando = false;
var qualTocando;
var videoSelecionado;
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

var i;

function videoUm() {
  if(tocando == false) {
    qualTocando = 0;
    tocando = true;
		for (i = 0; i < titulosOffCanvas.length; i++) {
      titulosOffCanvas[i].classList.add("d-none");
		}
    titulosOffCanvas[qualTocando].classList.remove("d-none");
    playEPause();
  }else {
    var abrirAvisoVar = videos[0].getAttribute("data-abrir-aviso");
    if(abrirAvisoVar == "true") {
      abreAviso();
      videoSelecionado = 0;
    }
    if(abrirAvisoVar == "false") {
      botaoOffCanvas.click();
    }
  }
}
function videoDois() {
  if(tocando == false) {
    qualTocando = 1;
    tocando = true;
    for (i = 0; i < titulosOffCanvas.length; i++) {
      titulosOffCanvas[i].classList.add("d-none");
		}
    titulosOffCanvas[qualTocando].classList.remove("d-none");
    playEPause();
  }else {
    var abrirAvisoVar = videos[1].getAttribute("data-abrir-aviso");
    if(abrirAvisoVar == "true") {
      abreAviso();
      videoSelecionado = 1;
    }
    if(abrirAvisoVar == "false") {
      botaoOffCanvas.click();
    }
  }
}
function videoTres() {
  if(tocando == false) {
    qualTocando = 2;
    tocando = true;
    for (i = 0; i < titulosOffCanvas.length; i++) {
      titulosOffCanvas[i].classList.add("d-none");
		}
    titulosOffCanvas[qualTocando].classList.remove("d-none");
    playEPause();
  }else {
    var abrirAvisoVar = videos[2].getAttribute("data-abrir-aviso");
    if(abrirAvisoVar == "true") {
      abreAviso();
      videoSelecionado = 2;
    }
    if(abrirAvisoVar == "false") {
      botaoOffCanvas.click();
    }
  }
}
function videoQuatro() {
  if(tocando == false) {
    qualTocando = 3;
    tocando = true;
    for (i = 0; i < titulosOffCanvas.length; i++) {
      titulosOffCanvas[i].classList.add("d-none");
		}
    titulosOffCanvas[qualTocando].classList.remove("d-none");
    playEPause();
  }else {
    var abrirAvisoVar = videos[3].getAttribute("data-abrir-aviso");
    if(abrirAvisoVar == "true") {
      abreAviso();
      videoSelecionado = 3;
    }
    if(abrirAvisoVar == "false") {
      botaoOffCanvas.click();
    }
  }
}
function videoCinco() {
  if(tocando == false) {
    qualTocando = 4;
    tocando = true;
    for (i = 0; i < titulosOffCanvas.length; i++) {
      titulosOffCanvas[i].classList.add("d-none");
		}
    titulosOffCanvas[qualTocando].classList.remove("d-none");
    playEPause();
  }else {
    var abrirAvisoVar = videos[4].getAttribute("data-abrir-aviso");
    if(abrirAvisoVar == "true") {
      abreAviso();
      videoSelecionado = 4;
    }
    if(abrirAvisoVar == "false") {
      botaoOffCanvas.click();
    }
  }
}
function videoSeis() {
  if(tocando == false) {
    qualTocando = 5;
    tocando = true;
    for (i = 0; i < titulosOffCanvas.length; i++) {
      titulosOffCanvas[i].classList.add("d-none");
		}
    titulosOffCanvas[qualTocando].classList.remove("d-none");
    playEPause();
  }else {
    var abrirAvisoVar = videos[5].getAttribute("data-abrir-aviso");
    if(abrirAvisoVar == "true") {
      abreAviso();
      videoSelecionado = 5;
    }
    if(abrirAvisoVar == "false") {
      botaoOffCanvas.click();
    }
  }
}

function continuaOuvindo() {
  btnsFechaOffCanvas[1].click();
}

function continuaAssistindo() {
  botaoAviso.click();
  //  videos[qualTocando].click();
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
  }else {
    panoDeFundo.style.display = "none";
  }
}

setInterval(segundoPlano, 1);



//     aviso botoes      4 botoes  -  continuar ouvindo - continuar assistindo - assistir video selecionado - ouvir video selecionado

//   continuar ouvindo   --   botaoAviso.click();
//   continuar assistindo    --   botaoAviso.click(); + videos[qualTocando].click();
//   assistir video selecionado   --   uma variavel ( videoSelecionado ) é modificada para o número do video clicado ( de 0 a 5 ) através do "true" do data-abre-aviso, aí =    
//   ouvir video selecionado    --   


videos[0].onclick = videoUm;
videos[1].onclick = videoDois;
videos[2].onclick = videoTres;
videos[3].onclick = videoQuatro;
videos[4].onclick = videoCinco;
videos[5].onclick = videoSeis;

btnsFechaModal[0].onclick = fechaModal;
btnsFechaModal[1].onclick = fechaModal;
btnsFechaModal[2].onclick = fechaModal;
btnsFechaModal[3].onclick = fechaModal;
btnsFechaModal[4].onclick = fechaModal;
btnsFechaModal[5].onclick = fechaModal;

btnsFechaOffCanvas[0].onclick = fechaModal;

botoesPulaParaTras[0].onclick = pulaParaTrasVideo;
botoesPulaParaTras[1].onclick = pulaParaTrasVideo;
botoesPulaParaTras[2].onclick = pulaParaTrasVideo;
botoesPulaParaTras[3].onclick = pulaParaTrasVideo;
botoesPulaParaTras[4].onclick = pulaParaTrasVideo;
botoesPulaParaTras[5].onclick = pulaParaTrasVideo;
botoesPulaParaTras[6].onclick = pulaParaTrasVideo;

botoesPlay[0].onclick = playEPause;
botoesPlay[1].onclick = playEPause;
botoesPlay[2].onclick = playEPause;
botoesPlay[3].onclick = playEPause;
botoesPlay[4].onclick = playEPause;
botoesPlay[5].onclick = playEPause;
botoesPlay[6].onclick = playEPause;

botoesPausa[0].onclick = playEPause;
botoesPausa[1].onclick = playEPause;
botoesPausa[2].onclick = playEPause;
botoesPausa[3].onclick = playEPause;
botoesPausa[4].onclick = playEPause;
botoesPausa[5].onclick = playEPause;
botoesPausa[6].onclick = playEPause;

botoesPulaParaFrente[0].onclick = pulaParaFrenteVideo;
botoesPulaParaFrente[1].onclick = pulaParaFrenteVideo;
botoesPulaParaFrente[2].onclick = pulaParaFrenteVideo;
botoesPulaParaFrente[3].onclick = pulaParaFrenteVideo;
botoesPulaParaFrente[4].onclick = pulaParaFrenteVideo;
botoesPulaParaFrente[5].onclick = pulaParaFrenteVideo;
botoesPulaParaFrente[6].onclick = pulaParaFrenteVideo;

btnContinuarOuvindo.onclick = continuaOuvindo;
btnContinuarAssistindo.onclick = continuaAssistindo;
btnOuvirVideoSelecionado.onclick = ouvirVideoSelecionado;
btnAssistirVideoSelecionado.onclick = assistirVideoSelecionado;



document.addEventListener("keydown", function(e) {
	const tecla = e.keyCode;
	const teclaEnter = 13;
	const teclaEsc = 27;
	const teclaEsquerda = 37;
	const teclaDireita = 39;
  const teclaJ = 74;
  const teclaK = 75;
  const teclaL = 76;
    if(tecla === teclaEnter && tocando === true) {
      playEPause();
    }
    if(tecla === teclaJ && tocando === true) {
      pulaParaTrasVideo();
    }
    if(tecla === teclaK && tocando === true) {
      playEPause();
    }
    if(tecla === teclaL && tocando === true) {
      pulaParaFrenteVideo();
    }
    if(tecla === teclaEsc && tocando === true) {
      btnsFechaModal[qualTocando].click();
    }
})

  //   melhorado        //    apenas um modal que clicando em determinado video, ele da display none para todos e dps com a variavel ele da o display block
//   todos os modais normais, o que muda são as classes no header e no footer, para cuidar de suas dimensoes, e os video ganham display: none; e outra div com o nome do video e um icone, ganha block, os botoes permanecem tanto no audio & video, como no somente audio

//    os controles no footer do modal, fazem as suas funcoes utilizando o array dos players junto a variavel para modificar o video selecionado




















/**
jsprotect
www-embed-player.js:562 Failed to load resource: net::ERR_BLOCKED_BY_ADBLOCKER
Qg @ www-embed-player.js:562
www-embed-player.js:1010 Failed to load resource: net::ERR_BLOCKED_BY_ADBLOCKER
Ym @ www-embed-player.js:1010
player.getCurrentTime();
5356.68387209346
player.seekTo(player.getCurrentTime - 10);
ej {i: Ti, h: iframe#player, m: div#player, j: 5, s: true, …}
player.seekTo(player.getCurrentTime(); - 10);
VM1789:1 Uncaught SyntaxError: missing ) after argument list
var tempo = player.getCurrentTime();
undefined
tempo
5191.739711
player.seekTo(tempo - 10);
ej {i: Ti, h: iframe#player, m: div#player, j: 5, s: true, …}
www-embed-player.js:562 GET https://googleads.g.doubleclick.net/pagead/id net::ERR_BLOCKED_BY_ADBLOCKER
Qg @ www-embed-player.js:562
Ng @ www-embed-player.js:549
(anonymous) @ www-embed-player.js:884
Ve @ www-embed-player.js:411
bl @ www-embed-player.js:881
(anonymous) @ www-embed-player.js:900
(anonymous) @ www-embed-player.js:486
player.seekTo(tempo - 10);
ej {i: Ti, h: iframe#player, m: div#player, j: 5, s: true, …}
player.seekTo(tempo - 10);
ej {i: Ti, h: iframe#player, m: div#player, j: 5, s: true, …}
player.seekTo(tempo - 10);
ej {i: Ti, h: iframe#player, m: div#player, j: 5, s: true, …}
player.seekTo(tempo - 100);
ej {i: Ti, h: iframe#player, m: div#player, j: 5, s: true, …}
*/