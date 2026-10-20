/*function saludar(nombre){
    nombre= document.getElementById("nombre").value;
    document.getElementById("saludo").textContent = "hola," + nombre ;
    
    
} 

function mostrarEdad(edad){
    edad= document.getElementById("edad").value;
    document.getElementById("mostrarEdad").textContent = "tu edad es " + edad ;*/
    

/*este + es para concadenar en la misma linea*/
  
 /*  if(edad>18){
        document.getElementById("mostrarEdad").textContent += " eres mayor de edad";
    }
    else{
        document.getElementById("mostrarEdad").textContent += " eres menor de edad";
    }
function saludarTresveces(){
    nombre= document.getElementById("nombre").value;
    document.getElementById("saludotres").textContent = "hola," + nombre ;
    console.log("hola" +nombre);
   
}*/
function sumar(a,b){
    return a+b;
}

suma1=sumar(3,4);
if(suma1<3){
    console.log("suma es menor que 3");}

function multiplicar(a,b){
    return a*b;
}

console.log(multiplicar(3,4));



    
function crearSaludo(nombre){
    return "hola," + nombre+ "soy la funcion";}

    console.log(crearSaludo("juan"));
    
