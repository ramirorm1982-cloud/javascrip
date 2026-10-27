function calcularTotal() {
  return this.precio * this.cantidad;
}



const producto = {
    nombre: "falda",
    precio: 25,
    disponible: true,
    cantidad:3,
 calcularTotal:calcularTotal
};
 
const producto2 ={
    nombre:"pantalon",
    precio:40,
    cantidad:3,
    precioTotal:calcularTotal
}
const producto3 ={
    nombre:"camisa",
    precio:35,
    cantidad:8,
    precioTotal:calcularTotal
}
console.log(producto2.precioTotal());
console.log(producto3.precioTotal());
console.log(producto.calcularTotal());
// producto.calcularTotalProducto(producto);
// console.log(producto.calcularTotalProducto (producto));


// producto.nombre;
// producto.precio;
// producto.disponible;
// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// producto.talla =["S", "M","L"];
// console.log(producto.talla);
// /*modificar una propiedad*/
// producto.precio=30
// console.log(producto.precio);

// /*borrar una propiedad del objeto*/
// delete producto.disponible;
// console.log(producto);
   
