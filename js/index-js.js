window.onload = function(){
    setTimeout(function(){

        var contenedor = document.getElementById("cont-carga");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";

        var x = document.getElementById("fondo-principal");
        x.style.display = "block";

    },1000);
}



new WOW().init();

