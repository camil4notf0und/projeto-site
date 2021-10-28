var offcanvasUm = document.getElementById("offcanvasScrolling");
var btnMove = document.getElementById("btn-move");

var n = 0;
var x, y;

const offcanvasSegue = ( event ) => {
    x = event.clientX;
    y = event.clientY;
    
    if(n == 1) {
        offcanvasUm.style.top = `calc(${y}px - 22.5px)`;
        offcanvasUm.style.left = `calc(${x}px - 220px)`;
    }
}


const offcanvasFixa =  () => {
    btnMove.blur();
    offcanvasUm.style.top = `calc(${y}px - 22.5px)`;
    offcanvasUm.style.left = `calc(${x}px - 220px)`;
    if(n == 0) {
        btnMove.classList.remove("grab");
        btnMove.classList.add("grabbing");
        n = 1;
    }else {
        btnMove.classList.remove("grabbing");
        btnMove.classList.add("grab");
        n = 0;
    }
}

const offcanvasReinicia = () => {
    n = 0;
    btnMove.blur();
    btnMove.classList.remove("grabbing");
    btnMove.classList.add("grab");
    offcanvasUm.style.top = `65px`;
    offcanvasUm.style.left = `calc(100% - 325px)`;
}

btnMove.addEventListener("click", offcanvasFixa);
btnMove.addEventListener("dblclick", offcanvasReinicia);
document.addEventListener("mousemove", offcanvasSegue);