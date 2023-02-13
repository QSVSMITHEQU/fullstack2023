//string, array, objects, funcion. the way we are doing it 
//Ejercicio 4: escribe un programa que dado dos arrays, devuelva el número de elementos
//que son iguales.


const array1 = ["1", "2" , "3", "4"];
const array2 = ["4", "6", "1", "3"];
let contador = 0;
let posiciones = [];

for (let i = 0; i < array1.length; i++) 
    for (let k = 0; k < array2.length; k++) {
        if(array1[i]==array2[k]){
           posiciones.push("La posicion del array1: "+ i + " y la posicion del array2: " + k + " son iguales." )
            contador++;
            console.log(array1[i],array2[k]);
        }
}

console.log('La cantidad de elementos iguales son:' + contador);
console.log(posiciones);

//Ejercicio 5: escribe un programa que extraiga una porción del array a partir de una
//posición inferior y una superior y lo almacene en otro array.
const array3 = ["1", "2" , "3", "4"] 
const array4 = ["4", "6", "1", "3"]
let emptyarray []; 
let contador = 0 

for(slice)

for (let i = 0; i<6, i++) {
 console.log(array4.push(1,2, "4", "6", "1", "3")) edades.push(i); 
   }

   array 

//Ejercicio 2 del proyecto: escribe un programa que almacene los objetos creados en el
//ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A
//continuación, recorre cada uno de los arrays y muestra todas propiedades.
