function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const pesquisaCookie = (cookie) => {
    let pesquisa = new RegExp(cookie, "i");

    if(pesquisa.test(document.cookie)) {
        return true;
    }else {
        return false;
    }
}

if(pesquisaCookie("videos-salvos")) {
    let videosFundo = document.getElementsByClassName("video__fundo");

    let videosSalvos = getCookie("videos-salvos");

    let videosSeparado = videosSalvos.split("-");
    videosSeparado.pop();

    videosSeparado.forEach((videoN) => {
        let numero = parseInt(videoN);
        
        videosFundo[numero].querySelector(".fa-bookmark").click();
    });
}

if(pesquisaCookie("videos-assistidos")) {
    let videosFundo = document.getElementsByClassName("video__fundo");

    let videosAssistidos = getCookie("videos-assistidos");

    let videosSeparado = videosAssistidos.split("-");
    videosSeparado.pop();

    videosSeparado.forEach((videoN) => {
        let numero = parseInt(videoN);
        
        videosFundo[numero].querySelector(".videos__video").setAttribute("data-assistido", "true");
    });
}


function geraCookie() {
    let videosFundo = document.getElementsByClassName("video__fundo");
    let videosSalvos = [];
    let videosAssistidos = [];


    [...videosFundo].forEach((video) => {
        let salvado = video.querySelector(".fa-bookmark").classList.contains("fas");
        let assistido = video.querySelector(".videos__video").getAttribute("data-assistido");

        if(salvado) {
            videosSalvos.push(video.querySelector(".videos__video").getAttribute("data-numero-podcast"));
        }
        if(assistido == "true") {
            videosAssistidos.push(video.querySelector(".videos__video").getAttribute("data-numero-podcast"));
        }
    });

    if(videosSalvos.length > 0) {
        let videosSalvosMontado = "";
        videosSalvos.forEach((pedaco) => {
            videosSalvosMontado += pedaco + "-";
        });

        setCookie("videos-salvos", `${videosSalvosMontado}`, 30);
    }else {
        setCookie("videos-salvos", "", -1000);
    }

    if(videosAssistidos.length > 0) {
        let videosAssistidoMontado = "";
        videosAssistidos.forEach((pedaco) => {
            videosAssistidoMontado += pedaco + "-";
        });

        setCookie("videos-assistidos", `${videosAssistidoMontado}`, 30);
    }else {
        setCookie("videos-assistidos", "", -1000);
    }
}


window.onbeforeunload = geraCookie;