let edad=18;
let plazas=15;
let precio=120;
let estudiante =true;
let plazasDisponibles=15;

document.getElementById("edad").textContent=edad;
document.getElementById("plazas").textContent=plazas;
document.getElementById("precio").textContent=precio;

if (plazasDisponibles< 5) {
console.log("¡Últimas plazas! ");
document.getElementById("mensaje-plazas").textContent= "¡Últimas plazas!";
}
else {
    console.log("plazas disponibles");
    document.getElementById("mensaje-plazas").textContent= "plazas disponibles";
}

if (edad>=18){
 console.log("puede hacer la reserva");
 document.getElementById("mensaje-edad").textContent= "puede hacer la reserva";
}
else {
  console.log("no puede hacer la reserva");
 document.getElementById("mensaje-edad").textContent= "no puede hacer la reserva";  
}
