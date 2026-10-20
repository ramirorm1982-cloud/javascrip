function sumar(a,b){
     suma=a+b;
     console.log(suma);
}
sumar(3,4);
sumar(5,6);
sumar(7,8);

function saludar(nombre){
    nombre= prompt("introduce tu nombre");
    document.getElementById("saludo").textContent = "hola," + nombre ;
    console.log("hola" +nombre);
    
}