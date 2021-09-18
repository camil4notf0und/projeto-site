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
});