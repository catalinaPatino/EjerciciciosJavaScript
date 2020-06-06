//ejercicio  de declaraciones en este caso uso de vart en javascript

var i = "global"; //declaramos la variable i como global
function foo(){
   var i = "local";//declaramos la misma variable i como local
   console.log(i);// mostrar local
}

foo();//imprimir y mostrar en pantalla
console.log(i); //mostrar global

