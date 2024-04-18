function validar(){
    var user = "desarrolladores";
    var pass = "trayectoweb";
    var cajauser=document.getElementById("usuario").value;
    var cajapass=document.getElementById("pass").value;
    if(cajauser== ""){
        alert("el campo user esta vacio");
    }
    else if(cajapass== ""){
        alert("el campo pass esta vacio");
    }
    else{
        if(user == cajauser && pass == cajapass){
            alert("bienvenido" +user);
        }
        else{
            alert("no eres usuario");
        }
    }
}