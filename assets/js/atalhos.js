var teclaMPressionada = false;
var digitando = false;

var inputs = document.getElementsByTagName("input");
[...inputs].forEach((campo) => {
  campo.addEventListener("focus", () => {
    digitando = true;
  });
  campo.addEventListener("blur", () => {
    digitando = false;
  });
});

document.addEventListener("keydown", function(e) {
	const tecla = e.keyCode;
	const teclaEnter = 13;
	const teclaEsc = 27;
	const teclaEsquerda = 37;
	const teclaDireita = 39;
  const teclaJ = 74;
  const teclaK = 75;
  const teclaL = 76;
  const teclaF = 70;
  const teclaM = 77;
  const teclaEspaco = 32;
    if(tocando === true && digitando === false) {
      if(tecla === teclaEnter) {
        playEPause();
      }
      if(tecla === teclaJ) {
        pulaParaTrasVideo();
      }
      if(tecla === teclaK) {
        playEPause();
      }
      if(tecla === teclaEspaco) {
        playEPause();
      }
      if(tecla === teclaL) {
        pulaParaFrenteVideo();
      }
      if(tecla === teclaEsc) {
        btnsFechaModal[qualTocando].click();
      }
      if(tecla === teclaEsquerda) {
        pulaParaTrasVideo();
      }
      if(tecla === teclaDireita) {
        pulaParaFrenteVideo();
      }
      if(tecla === teclaF) {
        telaCheia();
      }
      if(tecla === teclaM && teclaMPressionada == false) {
        if(maximixaMinimiza == 0) {
          teclaMPressionada = true;
          setTimeout(() => {
            btnsMinimiza[qualTocando].click();
          }, 450);
        }else {
          teclaMPressionada = true;
          setTimeout(() => {
            btnMaximiza.click();
          }, 450);
        }
      }
    }
});