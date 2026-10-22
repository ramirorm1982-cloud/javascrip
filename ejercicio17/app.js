let alumnos = [];
let notas = [];

function guardarAlumno() {
   let nombre= document.getElementById("nombre").value;
   let nota= document.getElementById("nota").value;
   alumnos.push(nombre);
   notas.push(nota);
   document.getElementById("contador").textContent = "Alumnos registrados: " + alumnos.length;

}
   /*mostrar la cantidad de notas de los alumnos*/
   function mostrarNotas(){
    let mensaje = "";
    for (let i = 0; i<alumnos.length; i++){
        mensaje += alumnos[i] + ": " + notas[i] + "  ";
    }
    document.getElementById("mensaje").textContent = mensaje;
}

    let arrayFrutas = ["fresa","manzana","pera"];
    
    function mostrarFrutas(){
       let mensajeConFrutas = "";
       for (let i = 0; i<arrayFrutas.length; i++){
        mensajeConFrutas += arrayFrutas[i] + " ";
    }
    document.getElementById("frutas").textContent = mensajeConFrutas;
}
     function agregarFrutas(){
        let nuevaFruta = document.getElementById("nuevaFruta").value;
        arrayFrutas.push(nuevaFruta);
        
        
    }