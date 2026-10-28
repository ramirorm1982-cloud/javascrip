// document.getElementById("saludo").textContent ="hola, soy ramiro";

let muchosParrafos=document.querySelectorAll(".mensaje");
console.log(muchosParrafos);

muchosParrafos.forEach(miParrafito=>{
    miParrafito.textContent="soy un parrafo capturado po un queryselectorAll"
})

let hora= new Date().getHours() + ":" 
+ new Date().getMinutes() + ":" 
+ new Date().getSeconds() + " ." 
+ new Date().getDate() + "/" 
+ (new Date().getMonth() + 1) 
+ "/" + new Date().getFullYear() + " aqui soy UTC:" 
+ new Date().toUTCString();

if(hora < "12:00")
    document.getElementById("saludo").textContent = "Buenos dias. La hora actual es: " + hora;
else if(hora < "18:00")
    document.getElementById("saludo").textContent = "Buenas tardes. La hora actual es: " + hora;
else
    document.getElementById("saludo").textContent = "Buenas noches. La hora actual es: " + hora;