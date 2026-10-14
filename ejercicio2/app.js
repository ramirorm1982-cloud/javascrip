let pelicula= "avatar";
let director= "stiven spilberg";
let año= "2015";
let estreno=`la pelicula es ${pelicula} del director ${director} y estrenada en el año ${año} `;
console.log(estreno);

pelicula=prompt(" nombre de la pelicula favorita");
director=prompt("director de tu preferencia");
año=prompt("año de estreno");
let estreno2= `la pelicula es ${pelicula} del director ${director} y estrenada en el año ${año} `;
document.getElementById("INFORMACION").textContent=estreno2;
console.log(estreno2);


   
