/*declarar un array*/
//let precios = [10, 20, 30, 40, 50];
/*bucle for,of*/
//for (let precio of precios) {
    /*console.log(precio);
}
/*bucle for each*/
/*precios.forEach(function(precio) {
    let precioConIva = precio * 1.21;
    console.log(precioConIva);  
});
precios.forEach(precio => {
    let precioConIva = precio * 1.21;
    console.log(precioConIva);
});*/
/*let precios = [10, 20, 30, 40, 50];
let preciosDescuento = precios.map(precio => precio * 0.85);
console.log("array original con precio sin descuentos " + precios );
console.log("array con precio con descuento  del 15% " + preciosDescuento );
let productosCaros = precios.filter(precio => precio > 25);
console.log("array con los productos de mayor valor que 25 " + productosCaros );

let producto30 = precios.find(precio => precio === 30);
console.log("el producto con el precio de 30 es " + producto30 );
let precio45 = precios.find(precio => precio === 45);
console.log("el precio con el precio de 45 es " + precio45 );

let producto20=precios.includes(20);
console.log("el producto con el precio de 20 es " + producto20 );

const total = precios.reduce((suma, precio) => suma + precio, 0);
console.log("el total de los precios es " + total );*/


/*let carrito =["leche", "huevos","pan"];
let elimunado = carrito.splice(1,2 );
console .log("elementos eliminados " + elimunado);
console .log("elementos restantes " + carrito);
carrito.splice(1,0,"mantequilla","queso","tomate");
console.log("carrito actualizado " + carrito);

carrito.splice(2,1, "harina");
console.log("carrito actualizado: " + carrito);*/

let tareas = [
"Estudiar JavaScript",
"Hacer ejercicios",
"Repasar arrays"
];
console.log("Mis tareas iniciales:", tareas);

tareas.push("enviar actividad ");
console.log("añadir al final", tareas);

tareas.unshift("revisar apuntes");
console.log("añadir al principio", tareas);

tareas.pop("enviar actividad ");
console.log("eliminar el ultimo elemento", tareas);

tareas.shift("revisar apuntes");
console.log("eliminar el primer elemento", tareas);

tareas.splice(1,1, "practicar funciones,");
console.log("eliminar y reemplazar", tareas);

for ( i = 0; i < tareas.length; i++) {
    console.log(tareas[i]);
}

for (let tarea of tareas) {
    console.log("pendiente " + tarea);
}

tareas.forEach((tarea,indice) => {
    console.log(`tarea ${indice +1}: ${tarea}`);
});

let tareasEnMayusculas = tareas.map(tarea => tarea.toUpperCase());
console.log("tareas en mayusculas", tareasEnMayusculas);

const totalCaracters=tareas.reduce((acumulador,tarea) => acumulador + tarea.length, 0);
console.log("total de caracteres " + totalCaracters);
    