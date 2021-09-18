var videos = document.getElementsByClassName("videos__video");
var titulosOffCanvas = document.getElementsByClassName("offcanvas-title-segundo-plano");
var botaoOffCanvas = document.getElementById("botaoAbreOffCanvas");
var offCanvasDois = document.getElementById("offcanvasScrollingDois");
var panoDeFundo = document.getElementById("panoDeFundo");
var tocando = false;
var qualTocando, videoSelecionado, i;

/** 
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
*/

var qualVideo = 0;

[...videos].forEach((video) => {
  var qualVideoLocal = qualVideo;
  video.addEventListener("click", () => {
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
  
  
setInterval(segundoPlano, 1);
  
/**
videos[0].onclick = videoUm;
videos[1].onclick = videoDois;
videos[2].onclick = videoTres;
videos[3].onclick = videoQuatro;
videos[4].onclick = videoCinco;
videos[5].onclick = videoSeis;
*/