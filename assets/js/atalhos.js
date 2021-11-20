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
	const tecla = e.key;

  const atalhosAceitos = {
    Enter() {
      playEPause();
    },
    j() {
      pulaParaTrasVideo();
    },
    k() {
      playEPause();
    },
    l() {
      pulaParaFrenteVideo();
    },
    Escape() {
      if(fullScreen === 0) {
        btnsFechaModal[qualTocando].click();
      }else if(fullScreen === 1) {
        telaCheia();
      }
    },
    ArrowLeft() {
      pulaParaTrasVideo();
    },
    ArrowRight() {
      pulaParaFrenteVideo();
    },
    f() {
      telaCheia();
    },
    m() {
      if(teclaMPressionada == false) {
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
  };
  
  if(tocando === true && digitando === false) {
    const funcaoAtalho = atalhosAceitos[tecla];

    if(funcaoAtalho) {
      funcaoAtalho();
    }
  }
});