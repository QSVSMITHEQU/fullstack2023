//Ejercicio 1: escribe un programa que dado dos string compruebe si los dos primeros caracteres son iguales.
let str1 = 'ciudad', str2= 'bar';
if (str1.charAt(0) === str2.charAt (0)) { 
    console.log("el primer y segundo character del string 1 son iguales")
}
else {
console.log ("el primer y segundo character del string 1 no son iguales")
}

console.log
//Ejercicio 2: escribe un programa que dado dos string compruebe si los dos primeros caracteres y los dos últimos son iguales.
let str1 = 'ciudad', str2= 'bar';
if(str1.length(-1)===str2.length (-1)) {
    console.log ("el ultimo character de ciudad y bar son iguales");
}
else { 
    console.log ("el ultimo character de ciudad y bar no son iguales");

}

//FROM RIGHT TO LEFT START POSITION IS -1
/length
//Ejercicio 3: escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.

let string8=jdhfabckd;
if(string8.search(/[abc]/) === string8.charAt(0) ) {
console.log ("string8 incluye abc en posición 0");
}
else { 
console.log ("string8 no incluye abc en posición 0");
}

if(string8.search(/[abc]/) === string8.charAt(string8.length-1))
{
 console.log ("string8 incluye abc en posición -1");
    }
else { 
console.log ("string8 no incluye abc en posición -1");
    }





//Ejercicio 4: escribe un programa que dado un string y una determinado posición, compruebe que el carácter anterior y el posterior son iguales o no.
//Ejercicio 5: escribe un programa que muestre por pantalla la posición de la segunda y tercera ocurrencia del carácter 'a' en un string dado.
use index of 
indefof(a)
//Ejercicio 6: escribe un programa que devuelva si un string es palíndromo (se escribe igual hacia delante y hacia detrás). Ejemplo: "sometemos".
//Ejercicio 7: escribe un programa que elimine el último carácter de un string.
//Ejercicio 8: escribe un programa que inserte el carácter 'b' cada tres posiciones en un string.
//Ejercicio 9: escribe un programa que convierta en mayúsculas la primera letra de cada palabra de un string

// from right start with -1, from the left start from 0. 8TWO POINTS, THE SECODN not inluded slice taken letter right next to the numbre position that you put. 


const str = 'Visita MICROSOFT! Microsoft!';

const str = 'Hello World!';
// HELLO WORLD!
console.log(str.toUpperCase());

//conjoin two elements contatenar 
const text1 = 'Hello';
const text2 = 'World';
const text3 = '!';
// HelloWorld
console.log(text1.concat(text2));
// Hello World
console.log(text1.concat(' ', text2));
// Hello World!
console.log(text1.concat(' ', text2, text3));

//SPLIT  //so they are not in the same string separate by , save it in an array (dividible values that are separate. and put it in an index organise in different columns (excel))
const text = 'a,b,c,d,e';
const array = text.split(',');
// ["a", "b", "c", "d", "e"]
console.log(array);
// a,b,c,d,e
console.log(array.toString());

//does not save the spaces in front and behind but not inside. 
const text = ' Hola ';
// Hola (sin espacios a los lados)
console.log(text.trim());

let palindromo = "aibofobia"; 
let inverso = ""; //each position , add the letter before to this string until you have the whole word.

for (let i = palindromo.length-1; i<=0; i--) {
    inverso +=palindromo.charAt(i);
    
}
if (palindromo == inverso) {
    console.log ("la variable palinromo:" +palinromo+ "es un palindrono ");
}
else {
    console.log ("la variable palinromo:" +palinromo+" no es un palindrono "); 
}

//same from right to left and left to right

//program eliminate last word of a string 

const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
const lon = frutas.length;
// for clásico
for (let i = 0; i < lon; i++) {
console.log(frutas[i])
}
// for...of //for every value of fruit you assign it to the group fruta //fruit would only be expressed and assinged in this group, scope is just here not beyond// create the 
//variable directly in for instead of doing it outside 
for (let fruta of frutas)
console.log(fruta)


//

const coche = ["coche1", "porche", "tesla", "bentley"];

for(let coche of coches) {
    console.log(coche);

}
//important use it a lot. push, collocar un nuevo variable al array 
const coches = ['Saab', 'Volvo', 'BMW'];
// 4
console.log(coches.push('Renault'));
// ["Saab", "Volvo", "BMW", "Renault"]
console.log(coches);
// otra forma de agregar elementos
const coche2 = ['Saab', 'Volvo', 'BMW'];
coche2[coche2.length] = 'Renault';
// ["Saab", "Volvo", "BMW", "Renault"]
console.log(coche2);
// aunque no es una buena práctica añadir elementos por su posición
const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
frutas[10] = 'Lemon';
// ["Banana", "Orange", "Apple", "Mango", empty × 6, "Lemon"]
console.log(frutas);

/////////////
const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
// 5
console.log(frutas.unshift('Lemon'));
// ["Lemon", "Banana", "Orange", "Apple", "Mango"]
console.log(frutas);

//get rid of a value at the end of the array, no need to specify the value

const coches = ['Saab', 'Volvo', 'BMW'];
// BMW
console.log(coches.pop());
// ["Saab", "Volvo"]
console.log(coches);


//Método shift: elimina el primer elemento de un array y lo retorna.
const coches = ['Saab', 'Volvo', 'BMW'];
// Saab
console.log(coches.shift());
// ["Volvo", "BMW"];
console.log(coches);

//exersize 
const programas = ["HTML", "JavaScript", "CSS"];
console.log(programas.push("Python"));

console.log(programas.unshift("Python"));
console.log(programas.pop());
console.log(programas.shift());
console.log(programas);

//end of exercize 

//get rid of the first but leaving the space, the others don't decrease positions. 
const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
delete frutas[0];
// [empty, "Orange", "Apple", "Mango"]
console.log(frutas);

//slice to remove elements // eliminar elementos //getting rid of orange and apple from position 1
const frutas1 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Orange", "Apple"]
console.log(frutas1.splice(1, 2));
// ["Banana", "Mango"]
console.log(frutas1);

//////////////
// añadir elementos
const frutas2 = ['Banana', 'Orange', 'Apple', 'Mango'];
// []
console.log(frutas2.splice(2, 0, 'Lemon', 'Kiwi'));
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
console.log(frutas2);

// eliminar y añadir elementos (primero elimina y luego añade)// a way of replacing 
const frutas3 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Apple", "Mango"]
console.log(frutas3.splice(2, 2, 'Lemon', 'Kiwi'));
// ["Banana", "Orange", "Lemon", "Kiwi"]
console.log(frutas3);

//slice 

//excersize only shows you what you eliminate, (console), not what you add, you would have to console.log(cars) to see the elements 
//2, start there, and emliminate two/ go to position 3 and eliminate 1
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(coches.splice(2,2, "tesla", "toyota")); 
console.log(coches.splice(3,1, "ferrari", "coche5"))

//Método concat: une dos arrays. Este método puede aceptar tantos parámetros como
arrays quieran ser concatenados.
const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const myChildren = myGirls.concat(myBoys)
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
console.log(myChildren);

////
const frutas = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const frutas1 = frutas.slice(1,2);
// ["Orange"] //so it takes from position one and then the second is not included, it gets the one on the left so orange

const frutas1 = frutas.slice(1); //gives you everything from position 1 onwards. 

//Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y sean
//mostrados en pantalla utilizando un bucle for clásico y un bucle for...of 
const edades= [] //6 elements in the array

for (let i = 0; i<6, i++) {
     edades=edades.push(i); 
    }


    for (let i = 0; i<6, i++) { //the floor, makes it so that decimals are not included, 0.4 is just 0 
        edades=edades.push(mathfloor ); 
       } //math random element still didn't go over .
   
        
//Ejercicio 2 : escribe un programa que almacene los nombres de tres colores en un array y
//los muestre por pantalla mediante un bucle for...of


//same as programas. 

//Ejercicio 3: escribe un programa con un array que almacene los nombres de tres colores.


//A continuación, crea otro array vacío e inserta en él todos los elementos del primer array
//mediante un for...of y el método push


