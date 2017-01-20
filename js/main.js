function validateForm(evt){
        var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var contrasenia = document.getElementById("input-password").value;
    var correo = document.getElementById("input-email").value;
    var selecion = document.getElementsByClassName("form-control")[4].value;
    
    if(nombre=="" || apellido=="" || correo=="" || contrasenia=="" || seleccion==""){
        alert("no llenaste ninguno de los campos");
    }

    cont();
    validName();
    mayusculas();
    email();
    caracteres();
    seleccionar();
    blanco();
}

function validName(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var numApe=(/[0-9]/g).test(apellido);
    var numNom=(/[0-9]/g).test(nombre);
    if(numApe== true || numNom==true){
        alert("no uses numeros en el nombre o apellido");
    }
    
}

function cont(){
    var contrasenia = document.getElementById("input-password").value;
    
    if(contrasenia=="098754" || contrasenia=="123456"){
        alert("contraseña no aceptada");
    }
}
function mayusculas(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;  
    if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
        alert("escribir la primera letra en mayuscula");
    }
    
    if(apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
        alert("escribir la primera letra en mayuscula");
    }
}
function caracteres(){
    var contrasenia = document.getElementById("input-password").value;
    if(contrasenia.length<6){
        alert("su password tiene insuficientes caracteres");
    }
}
function email(){
    var correo = document.getElementById("input-email").value;
    var expresion=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(!expresion.test(correo)){
        alert("correo invalido");
    }
}
function seleccionar(){
    var selecion = document.getElementsByClassName("form-control")[4].value;
    if(selecion==0){
        alert("elige alguna opcion");
    }
}