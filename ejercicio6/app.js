let precioPantalon=30;
let cantidadPantalon=2; 
let precioCamiseta=15;
let cantidadCamisetas=1;
let gastoEnvio=5;
let fidelidad=true;
let diaViernes=true;

let total=(precioPantalon*2)+(precioCamiseta);
console.log("total");
document.getElementById("total").textContent=total;

let totalConEnvio=(total+gastoEnvio);
console.log (totalConEnvio);
document.getElementById("totalConEnvio").textContent=totalConEnvio;

let suma2=cantidadCamisetas+cantidadPantalon;
console.log (suma2);

let descuento=total>=100 || suma2>=3;
console.log (descuento);
document.getElementById("descuento").textContent=descuento;

let descuentoAdicional=fidelidad && diaViernes;
console.log(descuentoAdicional);
document.getElementById("descuentoAdicional").textContent=descuentoAdicional;
