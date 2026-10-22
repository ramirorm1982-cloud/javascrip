let colores = ["rojo","verde","azul"];


    console.log(colores[0]);
    console.log(colores[1]);
    console.log(colores[2]);    
    console.log(colores.length);

    let frutas =[]
    for (let i = 0; i < colores.length; i++) {
        console.log(colores[i]);
    }
    /*elementos del array*/
    for (let elementosDelArray of colores) {
        console.log(elementosDelArray);
    }
    /*devuelve los indices del array*/
    for (let elementosDelArray in colores) {
        console.log(elementosDelArray);
    }
    frutas.push("manzana,pera,limon,manzana");{
        console.log(frutas);
    }
   

   
   

