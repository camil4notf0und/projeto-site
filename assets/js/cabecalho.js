const iconesCabecalho = document.querySelectorAll(".navegacao--configs .fas");

const widthCabecalho = document.getElementsByTagName("header")[0].clientWidth;

const tamanhoIcones = widthCabecalho * 0.4725;

iconesCabecalho.forEach((icone) => {
	icone.style.fontSize = `${tamanhoIcones}px`;
});