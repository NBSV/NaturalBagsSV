window.onload = function () {
    setTimeout(function () {

        var contenedor = document.getElementById("contenedor-carga");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";

    }, 1000);
}


function mifuncion() {
    var container = document.getElementById("cargando");

    setTimeout(function () {
        container.style.display = "none";
    }, 3000);


}

var cuerp = function () {

    var cont = document.getElementById("cuerpo");
    cont.className = cont.className.replace("i2", "");

};

setTimeout(cuerp, 6000);
