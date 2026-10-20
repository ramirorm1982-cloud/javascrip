let cantidad=6;
let precio=100;
if (cantidad>=5){
console.log("tenemos stock");
document.getElementById("stock").textContent= "tenemos stock";
}
//condicion 1//
if (cantidad>=5 && precio>0){
console.log("tenemos un  stock con precio de " +precio+ "$");
document.getElementById("stock").textContent= "tenemos un stock con precio de "+precio+ "$";
}
//alternativa al primer if//
else if (cantidad=>3){
    console.log("quedan pocas unidades");
    document.getElementById("stock").textContent= "quedan pocas unidades";
}
//salida si no cumple ninguna condicion//
else{
    console.log("no tenemos stock");
    document.getElementById("stock").textContent= "no tenemos stock";
}