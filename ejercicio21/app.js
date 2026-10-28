// const productos = [
//   { nombre: "Ratón", precio: 15, cantidad: 2 },
//   { nombre: "Teclado", precio: 30, cantidad: 3 },
//   { nombre: "Monitor", precio: 150, cantidad: 4 }
// ];
// for (const producto of productos){
// console.log("este es el nombre del producto: "+ producto.nombre);
// console.log (`este s el precio del producto: ${producto.precio}`)
// console.log ("esta es la cantidad: " + producto.cantidad );
// }

// let contador = 0;
// for (const producto of productos){
//     if (producto.precio>20){
//         contador++;
//     }
// }
// console.log("cantidad de productos con precio mayor a 20: " + contador);

// const encontrado = productos.find(
//   producto => producto.precio>20
// );

// if (encontrado) {
//   console.log(encontrado); 
// }
// const productosCaros=productos.filter(producto=>producto.precio>20);
// console.log(productosCaros);

// for(const producto of productosCaros) {
//     console.log("producto caro " + producto.nombre);
// }

// productos.push({
//   nombre: "Impresora",
//   precio: 90,
//   cantidad: 2
// });

// console.log(productos);

// productos [3].precio=45;
// console.log(productos[3].precio);

// for(const propiedad in productos[3]){
//     console.log(propiedad);
    
// }
//  console.log(productos[3].nombre);
//  for (const propiedad in productos[3]){
//     console.log("propiedad y valor " + productos[3][propiedad]);
//  }

 let falda={
    nombre: "falda",
    cantidad: 10,
    precio: 25
 }

 console.log(Object.keys(falda));
 console.log(Object.values(falda));
 console.log(Object.entries(falda));
