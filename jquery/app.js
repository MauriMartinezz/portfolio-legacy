$(document).ready(function(){
    console.log("jquery cargado")
    $("h1").html("Holaaa, hermosa mañana noo?")
    $("#titulo").html("Desde ID!")
    $(".container h2").addClass("bg-info")
    $("#desaparecer").css({color: 'green', background: "salmon", padding: "25px"})

    $("img").attr("src", "./patron.jpg")
    $("img").attr("width", "300px") //primer parametro atributo a editar despues una coma y despues el valor

    var parrafo = $("#parrafo")
    parrafo.hide()
    $(".btn-primary").click(function(){
        parrafo.show()

    });
    $(".btn-danger").click(function(){
        parrafo.hide()
    });
    $(".btn-info").click(function(){
        parrafo.toggleClass("display-1")
    });

    $("#formulario").submit(function(evento){
        evento.preventDefault();
        var nombre = $("#nombre").val();
       console.log("Bienvenido"+ " " + nombre)
    })


    var parrafito = $("#parrafito")
    parrafito.hide()
    $("#boton1").click(function(){
        parrafito.fadeIn(1000)

    });
    $("#boton2").click(function(){
        parrafito.fadeOut(1000)
    });
    $("#boton3").click(function(){
        parrafito.toggleClass(1000)
    });
});