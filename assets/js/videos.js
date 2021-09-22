var videos = document.getElementsByClassName("videos__video");
var titulosOffCanvas = document.getElementsByClassName("offcanvas-title-segundo-plano");
var botaoOffCanvas = document.getElementById("botaoAbreOffCanvas");
var offCanvasDois = document.getElementById("offcanvasScrollingDois");
var panoDeFundo = document.getElementById("panoDeFundo");
var tocando = false;
var qualTocando, videoSelecionado, i;


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
        segundoPlano();
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