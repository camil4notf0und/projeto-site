var cabecalho = document.querySelector(".cabecalho");
var principal = document.querySelector(".principal");

var scroll;
window.addEventListener("scroll", function (event) {
    scroll = this.scrollY;
	if(scroll>500) { cabecalho.style.transition = "opacity 1s, top  1s"};
	if(scroll<=500) { cabecalho.style.top = "-70px"; }
	if(scroll>510) { cabecalho.style.top = "0"; }
	if(scroll>=200) {
		cabecalho.style.position = "fixed";
		principal.style.margin = "61.89px 0 0 0";
	}else {
		cabecalho.style.position = "static";
		principal.style.margin = "0";
	}
});