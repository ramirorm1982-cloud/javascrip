function comprobarAcceso(){
    const edad = document.getElementById("edad").value;
    if(edad>=18){
        document.getElementById("resultadoTexto").textContent = "puedes entrar";
    }
    else{
        document.getElementById("resultadoTexto").textContent = "no puedes entrar";
    }
}