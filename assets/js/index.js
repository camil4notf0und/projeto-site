var videos = document.getElementsByClassName("videos__video");

var animacao = 0;

var scroll;
window.addEventListener("scroll", function (event) {
    scroll = this.scrollY;
});

function apareceVideos() {
    if(scroll >= 400) {
        if(animacao<videos.length) {
            videos[animacao].style.opacity = "1";
            animacao++;
            videos[animacao].style.opacity = "1";
            animacao++;
            videos[animacao].style.opacity = "1";
            animacao++;
        }
    }
}

setInterval(apareceVideos, 250);



var botaoOffCanvas = document.querySelector("#botaoAbreOffCanvas");
var botaoAviso = document.querySelector("#botaoAbreAviso");
var btnsMinimiza = document.getElementsByClassName("btn-minimiza");
var btnMaximiza = document.getElementsByClassName("btn-maximiza")[0];
var titulosOffCanvas = document.getElementsByClassName("offcanvas-title-segundo-plano");


function abreOffCanvas() {
    botaoOffCanvas.click();
    let idModal = document.getElementsByClassName("modal")[qualTocando].id;
    btnMaximiza.setAttribute("data-bs-target", "#" + idModal);
}
function maximiza() {
    botaoOffCanvas.click();
}
function abreAviso() {
    botaoAviso.click();
    let idModal = document.getElementsByClassName("modal")[qualTocando].id;
    btnContinuarAssistindo.setAttribute("data-bs-target", "#" + idModal);
}

btnsMinimiza[0].onclick = abreOffCanvas;
btnsMinimiza[1].onclick = abreOffCanvas;
btnsMinimiza[2].onclick = abreOffCanvas;
btnsMinimiza[3].onclick = abreOffCanvas;
btnsMinimiza[4].onclick = abreOffCanvas;
btnsMinimiza[5].onclick = abreOffCanvas;

btnMaximiza.onclick = maximiza;



var offCanvasDois = document.getElementById("offcanvasScrollingDois");
var panoDeFundo = document.getElementById("panoDeFundo");

