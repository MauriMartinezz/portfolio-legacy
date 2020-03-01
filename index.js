$(document).ready(function() {
  var container = $("#container");
  var bioContent = $("#bio-content");
  var form = $(".contacto");
  var projects = $(".proyectos");

 //Ocultar contenido segun categoria
  bioContent.hide();
  form.hide();
  projects.hide();

  var bio = $("#bio");
  var cv = $("#cv");
  var contact = $("#contact");
  var projectShow = $("#a-proyectos");

  cv.click(function(evento) {
    evento.preventDefault();
    container.fadeIn(500);

    $("#index1").addClass("active");
    $("#index2").removeClass("active");
    $("#index3").removeClass("active");
    $("#index4").removeClass("active");

    bioContent.hide();
    form.hide();
    projects.hide();
  });

  bio.click(function(evento) {
    evento.preventDefault();
    bioContent.fadeIn(500);

    $("#index2").addClass("active");
    $("#index1").removeClass("active");
    $("#index3").removeClass("active");
    $("#index4").removeClass("active");

    container.hide();
    form.hide();
    projects.hide();
  });

  contact.click(function(evento) {
    evento.preventDefault();
    form.fadeIn(500);

    $("#index3").addClass("active");
    $("#index1").removeClass("active");
    $("#index2").removeClass("active");
    $("#index4").removeClass("active");

    container.hide();
    bioContent.hide();
    projects.hide();
  });

  projectShow.click(function(evento) {
    evento.preventDefault();
    projects.fadeIn(500);

    $("#index4").addClass("active");
    $("#index1").removeClass("active");
    $("#index2").removeClass("active");
    $("#index3").removeClass("active");
    
    container.hide();
    bioContent.hide();
    form.hide();
  });
    $(".descripcion").hide()


  //Ocultar botones por defecto
    $(".btn").hide();

//Mostrar descripciones de proyectos
    var mostrar1 = $(".hideUno")
    $("#proyectoUno").click(function(){
      mostrar1.toggle(300);

      $("#proyectoUno").addClass("activo");
      $("#proyectoDos").removeClass("activo");
      $("#proyectoTres").removeClass("activo");
      $("#proyectoCuatro").removeClass("activo");
      $("#proyectoCinco").removeClass("activo");
      $("#proyectoSeis").removeClass("activo");


      mostrar2.fadeOut(400);
      mostrar3.fadeOut(400);
      mostrar4.fadeOut(400);
      mostrar5.fadeOut(400);
      mostrar6.fadeOut(400);
    })

    var mostrar2 = $(".hideDos")
    $("#proyectoDos").click(function(){
      mostrar2.toggle(300);

      $("#proyectoDos").addClass("activo");
      $("#proyectoUno").removeClass("activo");
      $("#proyectoTres").removeClass("activo");
      $("#proyectoCuatro").removeClass("activo");
      $("#proyectoCinco").removeClass("activo");
      $("#proyectoSeis").removeClass("activo");

      mostrar1.fadeOut(400);
      mostrar3.fadeOut(400);
      mostrar4.fadeOut(400);
      mostrar5.fadeOut(400);
      mostrar6.fadeOut(400);
    })

    var mostrar3 = $(".hideTres")
    $("#proyectoTres").click(function(){
      mostrar3.toggle(300);

      $("#proyectoTres").addClass("activo")
      $("#proyectoUno").removeClass("activo");
      $("#proyectoDos").removeClass("activo");
      $("#proyectoCuatro").removeClass("activo");
      $("#proyectoCinco").removeClass("activo");
      $("#proyectoSeis").removeClass("activo");

      mostrar1.fadeOut(400);
      mostrar2.fadeOut(400);
      mostrar4.fadeOut(400);
      mostrar5.fadeOut(400);
      mostrar6.fadeOut(400);
    })


    var mostrar4 = $(".hideCuatro")
    $("#proyectoCuatro").click(function(){
      mostrar4.toggle(300);
      $("#proyectoCuatro").addClass("activo");
      $("#proyectoUno").removeClass("activo");
      $("#proyectoDos").removeClass("activo");
      $("#proyectoTres").removeClass("activo");
      $("#proyectoCinco").removeClass("activo");
      $("#proyectoSeis").removeClass("activo");

      mostrar1.fadeOut(400);
      mostrar2.fadeOut(400);
      mostrar3.fadeOut(400);
      mostrar5.fadeOut(400);
      mostrar6.fadeOut(400);
    })

    var mostrar5 = $(".hideCinco")
    $("#proyectoCinco").click(function(){
      mostrar5.toggle(300);
      $("#proyectoCinco").addClass("activo");
      $("#proyectoUno").removeClass("activo");
      $("#proyectoDos").removeClass("activo");
      $("#proyectoTres").removeClass("activo");
      $("#proyectoCuatro").removeClass("activo");
      $("#proyectoSeis").removeClass("activo");
      mostrar1.fadeOut(400);
      mostrar2.fadeOut(400);
      mostrar3.fadeOut(400);
      mostrar4.fadeOut(400);
      mostrar6.fadeOut(400);
    })

    var mostrar6 = $(".hideSeis")
    $("#proyectoSeis").click(function(){
      mostrar6.toggle(300);
      $("#proyectoSeis").addClass("activo");
      $("#proyectoUno").removeClass("activo");
      $("#proyectoDos").removeClass("activo");
      $("#proyectoTres").removeClass("activo");
      $("#proyectoCuatro").removeClass("activo");
      $("#proyectoCinco").removeClass("activo");

      mostrar1.fadeOut(400);
      mostrar2.fadeOut(400);
      mostrar3.fadeOut(400);
      mostrar4.fadeOut(400);
      mostrar5.fadeOut(400);
    })
  })

