window.onload = function(){
    setTimeout(function(){

        var contenedor = document.getElementById("cont-carga");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";

    },1000);
}



new WOW().init();

