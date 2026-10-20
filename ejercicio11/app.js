/*let numeroAleatorio=8;
let numeroIntroducido=Number(prompt("Introduce un número menor que 10"));
 
 
while (numeroIntroducido!=numeroAleatorio){
    numeroIntroducido=Number(prompt("Introduce un número menor que 10"));
    alert("el numero introducido no es correcto");
 

 
alert("¡Has adivinado el número!");
}*/
/*let saludo=0;
while(saludo<3) {
    console.log("hola");
    saludo=saludo+1
    console.log("saludo actualizado y valgo:"+saludo);
}
let contador=1;
while(contador<=5){
    console.log(contador);
    contador++
}
for(let contador=1;contador<=7;contador++){
    console.log(contador)
}
for(let contador=2;contador<=10;contador+=2){
    console.log(contador)
}
let numero=10;
do{
    console.log("hola soy el bucle do while"+ numero)
    numero++;
} while(numero<5);
 for (let numero =4;numero<20;numero++) {
    console.log("esto es una vuelta de bucle+numero");
    if(numero%2===0){
        console.log("este es un numero par:"+numero);
    }
    
 }*/
const mensaje = document.getElementById("mensaje");
let puedenPasar = 0;
 
for (let persona = 1; persona <= 10; persona += 1) {
  const edad = Number(prompt("Persona " + persona + ": escribe tu edad"));
 
  if (edad >= 18) {
    puedenPasar += 1;/*el numero de personas que pueden pasar xq tienen mas de 18*/
    console.log("La persona " + persona + " puede pasar.");
  }else{
    console.log("La persona " + persona + " no puede pasar.");
  }
}
 
if (puedenPasar === 10) {
  mensaje.textContent = "Las 10 personas pueden entrar.";
} else {
  mensaje.textContent = "Solo pueden entrar " + puedenPasar + " de 10.";
 
}
