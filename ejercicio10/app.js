let dinero=7;
let tipoPlan;
let buenTiempo=true;

if (dinero>=15 && buenTiempo){
    tipoPlan="excursion";
    console.log(tipoPlan);
}
else if(dinero>=10){
    tipoPlan="cine";
    console.log(tipoPlan);
}
else if (dinero<10){
    tipoPlan="casa";
    console.log(tipoPlan);
}
 switch (tipoPlan) {
    case "excursion":
      console.log ("te vas de excursion");
      break;
    case "cine":
      console.log ("vas al cine");
      break;
    case "casa":
      console.log ("te quedas en casa");
      break;
    
  }