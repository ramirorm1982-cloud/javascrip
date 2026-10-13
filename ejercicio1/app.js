let nombre="ramiro";
let ciudad="sevilla";
let edad="30";
let saludo= " hola ,mi nombre es " +nombre+ " soy de " +ciudad+ " tengo " +edad+ " años"
console.log(saludo);
let saludo2=`mi nombre es ${nombre} soy de ${ciudad} y tengo ${edad} años`;
console.log(saludo2);

nombre=prompt("introduce tu nombre: ");
ciudad=prompt("introdice tu ciudad: ");
edad=prompt("introduce tu edad: ");
saludo2=`mi nombre es ${nombre} soy de ${ciudad} y tengo ${edad} años`;
console.log(saludo2);
document.getElementById("hola").textContent=saludo2;
console.log(saludo);