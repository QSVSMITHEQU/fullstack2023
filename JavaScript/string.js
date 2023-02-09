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
//Ejercicio 4: escribe un programa que dado un string y una determinado posición, compruebe que el carácter anterior y el posterior son iguales o no.
//Ejercicio 5: escribe un programa que muestre por pantalla la posición de la segunda y tercera ocurrencia del carácter 'a' en un string dado.
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