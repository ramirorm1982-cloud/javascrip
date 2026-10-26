/*Actividad JavaScript · ¡Lanza el dado!
¿Qué vamos a crear?
Vamos a crear un pequeño juego en el que el usuario tendrá que lanzar un dado e intentar
conseguir un 6.
Cada vez que pulse el botón «Lanzar dado», JavaScript generará un número aleatorio
entre 1 y 6.
● Si obtiene un 6, aparecerá el mensaje «¡Enhorabuena! Has ganado». ● Si obtiene
cualquier otro número, aparecerá «No has sacado un 6. ¡Inténtalo otra vez!».
El jugador podrá lanzar el dado tantas veces como quiera.
Construye el HTML
Tu página debe contener:
1. Un título: «¡Lanza el dado!».
2. Un pequeño texto explicando que hay que conseguir un 6.
3. Una imagen de un dado.
4. Un botón con el texto «Lanzar dado».
5. Un párrafo para mostrar si ganas o pierdes.
6. Dale un poco de estilo.
Recuerda utilizar identificadores id para que JavaScript pueda modificar el contenido de
los párrafos.
Y ahora un reto final 🥇🥇🥇🥇🥇🥇
Y ahora que conoces los arrays podemos añadir una lista que guarde los números
obtenidos. Por supuesto tendrás que mostrar estos números en el html.
¿Qué mejoras se te ocurren*/

function lanzarDado(){
 const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
 document.getElementById("numero").textContent = numeroAleatorio;
  
if(numeroAleatorio === 6){
    document.getElementById("resultado").textContent = "¡Enhorabuena! Has ganado";
}
else{
    document.getElementById("resultado").textContent = "No has sacado un 6. ¡Inténtalo otra vez!";
}
return resultado;
}

