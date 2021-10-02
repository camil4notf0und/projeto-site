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

if(document.cookie != "") {
    let videosFundo = document.getElementsByClassName("video__fundo");

    let videosSalvos = getCookie("videos-salvos");

    let videosSeparado = videosSalvos.split("-");
    videosSeparado.pop();

    videosSeparado.forEach((videoN) => {
        let numero = parseInt(videoN);
        
        videosFundo[numero].querySelector(".fa-bookmark").click();
    });
}


function geraCookie() {
    let videosFundo = document.getElementsByClassName("video__fundo");
    let videosSalvos = [];


    [...videosFundo].forEach((video) => {
        let salvado = video.querySelector(".fa-bookmark").classList.contains("fas");

        if(salvado) {
            videosSalvos.push(video.querySelector(".videos__video").getAttribute("data-numero-podcast"));
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
}


window.onbeforeunload = geraCookie;