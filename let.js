//ejercicio de declaraciones en este caso uso de let en javascript
let i = 0;//declaracion de la varible global en este caso i
function foo(){
    i = 1;
    let j=2;//declaracion de la variable local en este caso j
    if(true){
        console.log(i);//1 mostrar variable i
        console.log(j);//2 mostrar varable j
    }
}
foo();//imprimir el resultado