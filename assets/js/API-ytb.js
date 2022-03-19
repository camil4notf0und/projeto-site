// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var players = [];


var pauseEplay = 0;


var maximixaMinimiza = 0;




var botoesPulaParaTras = document.getElementsByClassName("fa-backwardVideo");
var botoesPausa = document.getElementsByClassName("fa-pauseVideo");
var botoesPlay = document.getElementsByClassName("fa-playVideo");
var botoesRetorno = document.getElementsByClassName("fa-undoVideo");
var botoesPulaParaFrente = document.getElementsByClassName("fa-forwardVideo");
var botoesFullScreen = document.getElementsByClassName("fa-full-screen");

var animaCliqueAtras = document.getElementsByClassName("cliqueAtras");
var animaCliquePlayEPause = document.getElementsByClassName("cliquePlayEPause");
var animaCliqueFrente = document.getElementsByClassName("cliqueFrente");

[...animaCliqueAtras, ...animaCliquePlayEPause, ...animaCliqueFrente].forEach(elemento => {
  elemento.classList.add("anima-clique");
  elemento.classList.add("nao-aparece");
});



var iconesFullScreen = document.getElementsByClassName("icone--full-screen");

var temposVideos = document.getElementsByClassName("tempo-video");

var btnsFechaModal = document.getElementsByClassName("fecha-modal");
var btnsFechaOffCanvas = document.getElementsByClassName("fechaOffCanvas")

var btnContinuarOuvindo = document.getElementById("btn-continua-ouvindo");
var btnContinuarAssistindo = document.getElementById("btn-continua-assistindo");
var btnOuvirVideoSelecionado = document.getElementById("btn-ouvir-selecionado");
var btnAssistirVideoSelecionado = document.getElementById("btn-assistir-selecionado");


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

var limpaAnimacao, limpaAnimacaoDois;

function playEPause() {
  if(pauseEplay == 0) {
    botoesPlay[qualTocando].style.display = "none";
    botoesPausa[qualTocando].style.display = "block";
    botoesPlay[videos.length].style.display = "none";
    botoesPausa[videos.length].style.display = "block";
    botoesRetorno[qualTocando].style.display = "none";
    botoesRetorno[videos.length].style.display = "none";    
    tocarVideo();
    animaCliquePlayEPause[qualTocando].classList.remove("nao-aparece");
    animaCliquePlayEPause[qualTocando].classList.remove("fa-pause");
    animaCliquePlayEPause[qualTocando].classList.add("fa-play");
    animaCliquePlayEPause[qualTocando].classList.remove("anima-clique");
    clearTimeout(limpaAnimacao);
    clearTimeout(limpaAnimacaoDois);
    limpaAnimacao = setTimeout(() => {
      animaCliquePlayEPause[qualTocando].classList.add("anima-clique");
    }, 50);
    limpaAnimacaoDois = setTimeout(() => {
      animaCliquePlayEPause[qualTocando].classList.add("nao-aparece");
    }, 350);
    pauseEplay = 1;
  }else {
    botoesPlay[qualTocando].style.display = "block";
    botoesPausa[qualTocando].style.display = "none";
    botoesPlay[videos.length].style.display = "block";
    botoesPausa[videos.length].style.display = "none";
    botoesRetorno[qualTocando].style.display = "none";
    botoesRetorno[videos.length].style.display = "none";
    pausarVideo();
    animaCliquePlayEPause[qualTocando].classList.remove("nao-aparece");
    animaCliquePlayEPause[qualTocando].classList.remove("fa-play");
    animaCliquePlayEPause[qualTocando].classList.add("fa-pause");
    animaCliquePlayEPause[qualTocando].classList.remove("anima-clique");
    clearTimeout(limpaAnimacao);
    clearTimeout(limpaAnimacaoDois);
    limpaAnimacao = setTimeout(() => {
      animaCliquePlayEPause[qualTocando].classList.add("anima-clique");
    }, 50);
    limpaAnimacaoDois = setTimeout(() => {
      animaCliquePlayEPause[qualTocando].classList.add("nao-aparece");
    }, 350);
    pauseEplay = 0;
  }
}

function reiniciaVideo() {
  players[qualTocando].seekTo(0);

  setTimeout(() => {
    botoesPlay[qualTocando].style.display = "none";
    botoesPausa[qualTocando].style.display = "block";
    botoesPlay[videos.length].style.display = "none";
    botoesPausa[videos.length].style.display = "block";
  }, 50)
}

var tempoAtual, tempoTotal;
function pegaTempoVideo() {
  tempoAtual = players[qualTocando].getCurrentTime();
}

function pegaTempoTotalVideo() {
  tempoTotal = players[qualTocando].getDuration();
}

function pulaParaTrasVideo() {
  pegaTempoVideo();
  players[qualTocando].seekTo(tempoAtual - 10);
  animaCliqueAtras[qualTocando].classList.remove("nao-aparece");
  animaCliqueAtras[qualTocando].classList.remove("anima-clique");
  clearTimeout(limpaAnimacao);
  clearTimeout(limpaAnimacaoDois);
  limpaAnimacao = setTimeout(() => {
    animaCliqueAtras[qualTocando].classList.add("anima-clique");
  }, 50);
  limpaAnimacaoDois = setTimeout(() => {
    animaCliqueAtras[qualTocando].classList.add("nao-aparece");
  }, 350);
}

function pulaParaFrenteVideo() {
  pegaTempoVideo();
  if(tempoAtual + 10 < tempoTotal) {
    players[qualTocando].seekTo(tempoAtual + 10);
  }else {
    reiniciaVideo();
  }
  animaCliqueFrente[qualTocando].classList.remove("nao-aparece");
  animaCliqueFrente[qualTocando].classList.remove("anima-clique");
  clearTimeout(limpaAnimacao);
  clearTimeout(limpaAnimacaoDois);
  limpaAnimacao = setTimeout(() => {
    animaCliqueFrente[qualTocando].classList.add("anima-clique");
  }, 50);
  limpaAnimacaoDois = setTimeout(() => {
    animaCliqueFrente[qualTocando].classList.add("nao-aparece");
  }, 350);
}
function fechaModal() {
  setTimeout(segundoPlano, 350);
  if(fullScreen == 1) {
    telaCheia();
  }
  pararVideo();
  pauseEplay = 0;
  btnsFechaOffCanvas[0].click();
  tocando = false;
}

var velocidade;
function pegaVelocidade() {
  velocidade = players[qualTocando].getPlaybackRate();
}
function mudaVelocidade() {
  players[qualTocando].setPlaybackRate(parseFloat(botoesVelocidade[qualTocando].value));
}


btnsFechaOffCanvas[1].addEventListener("click", () => {
  setTimeout(segundoPlano, 350);
});

function continuaOuvindo() {
  btnsFechaOffCanvas[1].click();
}

function continuaAssistindo() {
  setTimeout(segundoPlano, 350);
  botaoAviso.click();
}

function ouvirVideoSelecionado() {
  botaoAviso.click();
  setTimeout(segundoPlano, 350);
  fechaModal();
  videos[videoSelecionado].click();
  btnsMinimiza[qualTocando].click();
}


function abreVideoSelecionado() {
  setTimeout(segundoPlano, 350);
  videos[videoSelecionado].click();
}
function assistirVideoSelecionado() {
  botaoAviso.click();
  setTimeout(segundoPlano, 350);
  fechaModal();
  setTimeout(abreVideoSelecionado, 350);
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

[...botoesRetorno].forEach(e => {
  e.style.display = "none";
  e.addEventListener("click", reiniciaVideo);
});

[...botoesPulaParaFrente].forEach(e => {
  e.addEventListener("click", pulaParaFrenteVideo)
});

[...botoesVelocidade].forEach((e) => {
  e.addEventListener("change", mudaVelocidade);
});


function toggleFullScreen() {
  
}



function telaCheia() {
  if(fullScreen == 0 && window.innerWidth > 700) {
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
  }else if(window.innerWidth > 700) {
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

function tempoVideo() {
  if(tocando == true) {
    pegaTempoVideo();
    pegaTempoTotalVideo();

    if(tempoAtual == tempoTotal) {
      botoesPlay[qualTocando].style.display = "none";
      botoesPausa[qualTocando].style.display = "none";
      botoesPlay[videos.length].style.display = "none";
      botoesPausa[videos.length].style.display = "none";
      botoesRetorno[qualTocando].style.display = "block";
      botoesRetorno[videos.length].style.display = "block";
    }else {
      botoesRetorno[qualTocando].style.display = "none";
      botoesRetorno[videos.length].style.display = "none";
      if(pauseEplay == 0) {
        botoesPlay[qualTocando].style.display = "block";
        botoesPausa[qualTocando].style.display = "none";
        botoesPlay[videos.length].style.display = "block";
        botoesPausa[videos.length].style.display = "none";
      }else {
        botoesPlay[qualTocando].style.display = "none";
        botoesPausa[qualTocando].style.display = "block";
        botoesPlay[videos.length].style.display = "none";
        botoesPausa[videos.length].style.display = "block";
      }
    }

    let spanSegundosSegundoPlanoAtual = temposVideos[videos.length].querySelector(".segundos-atual");
    let spanMinutosSegundoPlanoAtual = temposVideos[videos.length].querySelector(".minutos-atual");
    let spanHorasSegundoPlanoAtual = temposVideos[videos.length].querySelector(".horas-atual");

    let spanSegundosSegundoPlanoTotal = temposVideos[videos.length].querySelector(".segundos-total");
    let spanMinutosSegundoPlanoTotal = temposVideos[videos.length].querySelector(".minutos-total");
    let spanHorasSegundoPlanoTotal = temposVideos[videos.length].querySelector(".horas-total");


    let [segundosAtual, minutosAtual, horasAtual] = [tempoAtual, 0, 0];

    while(segundosAtual >= 60) {
      minutosAtual++;

      segundosAtual = segundosAtual - 60;
    }

    while(minutosAtual >= 60) {
        horasAtual++;

        minutosAtual = minutosAtual - 60;
    }
    
    
    let spanSegundosAtual = temposVideos[qualTocando].querySelector(".segundos-atual");
    let spanMinutosAtual = temposVideos[qualTocando].querySelector(".minutos-atual");
    let spanHorasAtual = temposVideos[qualTocando].querySelector(".horas-atual");

    if(segundosAtual < 10) {
      spanSegundosAtual.textContent = "0" + parseInt(segundosAtual);
      spanSegundosSegundoPlanoAtual.textContent = "0" + parseInt(segundosAtual);
    }else {
      spanSegundosAtual.textContent = parseInt(segundosAtual);
      spanSegundosSegundoPlanoAtual.textContent = parseInt(segundosAtual);
    }
    if(minutosAtual < 10) {
      spanMinutosAtual.textContent = "0" + parseInt(minutosAtual);
      spanMinutosSegundoPlanoAtual.textContent = "0" + parseInt(minutosAtual);
    }else {
      spanMinutosAtual.textContent = parseInt(minutosAtual);
      spanMinutosSegundoPlanoAtual.textContent = parseInt(minutosAtual);
    }
    if(horasAtual < 10) {
      spanHorasAtual.textContent = "0" + parseInt(horasAtual);
      spanHorasSegundoPlanoAtual.textContent = "0" + parseInt(horasAtual);
    }else {
      spanHorasAtual.textContent = parseInt(horasAtual);
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
    
    
    let spanSegundosTotal = temposVideos[qualTocando].querySelector(".segundos-total");
    let spanMinutosTotal = temposVideos[qualTocando].querySelector(".minutos-total");
    let spanHorasTotal = temposVideos[qualTocando].querySelector(".horas-total");

    if(segundosTotal < 10) {
      spanSegundosTotal.textContent = "0" + parseInt(segundosTotal);
      spanSegundosSegundoPlanoTotal.textContent = "0" + parseInt(segundosTotal);
    }else {
      spanSegundosTotal.textContent = parseInt(segundosTotal);
      spanSegundosSegundoPlanoTotal.textContent = parseInt(segundosTotal);
    }
    if(minutosTotal < 10) {
      spanMinutosTotal.textContent = "0" + parseInt(minutosTotal);
      spanMinutosSegundoPlanoTotal.textContent = "0" + parseInt(minutosTotal);
    }else {
      spanMinutosTotal.textContent = parseInt(minutosTotal);
      spanMinutosSegundoPlanoTotal.textContent = parseInt(minutosTotal);
    }
    if(horasTotal < 10) {
      spanHorasTotal.textContent = "0" + parseInt(horasTotal);
      spanHorasSegundoPlanoTotal.textContent = "0" + parseInt(horasTotal);
    }else {
      spanHorasTotal.textContent = parseInt(horasTotal);
      spanHorasSegundoPlanoTotal.textContent = parseInt(horasTotal);
    }
  }

}

setInterval(tempoVideo, 1);

[...temposVideos].forEach((e) => {
  e.addEventListener("click", mudaTempoVideo);
});

[...botoesFullScreen].forEach(e => {
  e.addEventListener("click", telaCheia);
});

btnContinuarOuvindo.onclick = continuaOuvindo;
btnContinuarAssistindo.onclick = continuaAssistindo;
btnOuvirVideoSelecionado.onclick = ouvirVideoSelecionado;
btnAssistirVideoSelecionado.onclick = assistirVideoSelecionado;


var cursor;
[...divPlayers].forEach(div => {
  div.addEventListener("click", playEPause);
  div.addEventListener("dblclick", telaCheia);
  div.addEventListener("mousemove", function() {
    clearTimeout(cursor);
    this.classList.remove("sem-cursor");
    cursor = setTimeout(() => {
      this.classList.add("sem-cursor");
    }, 2000);
  });
});

ouvirVideo.forEach((elemento) => {
  elemento.title = "Ouvir Podcast";
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