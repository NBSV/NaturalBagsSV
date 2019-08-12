window.onload = function () {
    setTimeout(function () {

        var contenedor = document.getElementById("contenedor-carga");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";

        var x = document.getElementById("fondo-principal");
        x.style.display = "block";

    }, 1000);
}


function mifuncion1() {
    var container = document.getElementById("cargando1");

    setTimeout(function () {
        container.style.display = "none";
    }, 3000);


}

var cuerp1 = function () {

    var cont = document.getElementById("cuerpo1");
    cont.style.display = "block";

};

setTimeout(cuerp1, 6000);

function mifuncion2() {
    var container = document.getElementById("cargando2");

    setTimeout(function () {
        container.style.display = "none";
    }, 3000);


}

var cuerp2 = function () {

    var cont = document.getElementById("cuerpo2");
    cont.style.display = "block";

};

setTimeout(cuerp2, 6000);

function mifuncion3() {
    var container = document.getElementById("cargando3");

    setTimeout(function () {
        container.style.display = "none";
    }, 3000);


}

var cuerp3 = function () {

    var cont = document.getElementById("cuerpo3");
    cont.style.display = "block";

};

setTimeout(cuerp3, 6000);