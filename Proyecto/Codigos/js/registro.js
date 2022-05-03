var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
$("#formulario").submit(function(e){
    e.preventDefault();

    var pass1 = $("#pass").val();
    var pass2 = $("#passr").val();
    var nomb = $("#nombre").val();
    var correo = $("#email").val();

    let mensajemostrar = "";
    let entrar = false;

    

    if(nomb.trim().length < 4){
        mensajemostrar += "La longitud no es correcta<br>";
        entrar = true;
    }

    if( pass1 != pass2) {
        mensajemostrar += "las contraseñas no coinsiden";
        entrar = true;

    }
    if(pass1.trim().length < 5 && pass1.trim().length >16){
        mensajemostrar += "La contraseña debe tener entre 5 a 16 caracteres";
        entrar = true;
    }

   
    if(entrar){
        $("#mensaje").html(mensajemostrar);
    }
    else{
        $("#mensaje").html("formulario enviado")
    }

})


})