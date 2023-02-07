const numero0 = 1;
const numero1 = 20.1;
// 32
const numero2 = 3.2e1;
// 300
const numero3 = 3e2;
// hexadecimal
const numero4 = 0x1f;
// binario
const numero5 = 0b1010;
// octal
const numero6 = 0o744;
// otra forma de declarar una variable de tipo numérico
const numero7 = Number(2);

//tipoboleano
const boolean1 = true;
const boolean2 = false;

//sting
const str1 ="Hola 'a' todos";

//14, 14 characters and spaces, 14 comes up in console

const str2 = 'hola';
// 3 
console.log(str2.indexOf('a')); //tells you the position of the a, 0, 1, 2, 3 (at 3)
// 1
console.log(str2.indexOf('ol'));
// -1
console.log(str2.indexOf('r')); //to tell you r does not exist in the text it gives you -1

//8
console.log(str2.indexOf('od'));

console.log(str1.length);

//substring, if you tell it substring (1), shows you everything after that position= la 
const str3 = 'hola';
// 'ola'
console.log(str3.substring(1));
//two position, everything in between the two postitions you put, including the first position you specified (1),
// but not including the last (3)
//SPACES ARE COUNTED
// 'ol'
console.log(str3.substring(1, 3));



//charAt, to find what is in certain positions, 0 tells you what is in that position does the same as the other, undefined if the thing is 
//not in the sping (5).
const str4 = 'hola';
// h
console.log(str4.charAt(0));


//ARRAYS
let person5= [Q,2000,]
const array1 = [];
const array2 = [20, 3, 8]; // otra forma de declarar arrays// coordinates, lines 1,1 one down up, x across axis, 2[8 *position 8] //asign variable way 1
const array3 = ['Carmen', 'Juan'];
 array4 = new Array(20, 3, 8); //asign variable way 2
console.lg (array2[2])
const array5 = new Array(null, undefined, '', 8) //4 variables in this array 

const array7=new array [Med, juan]
console.log(arrag2[2]) //position two of the array which does not exist shows me the second element in teh array 2 (20, 3, 8)

new array array4=new array (20,3,8)

array2 [2] =13 ;
console.log(array2[2]); //you just changed the second value in the line, to 13, in array two it will show the value of that position is 13 now. 
console.log

/// another example

const array7 = new Array('Carmen', 'Juan');
// Carmen
console.log(array7[0]);
// undefined

console.log(array7[2]);
console.log(array2.length) //tells you how many elements there are in array2 not the characters 

const array9 = new Array('Carmen', 'Juan');
array9[3] = 'Alejandro'; //in position 3 

const array10 = new Array('Carmen', 'Juan');
array10.length = 1;
// [ 'Carmen' ]
console.log(array10);

const date1 = new Date();
console.log(date1);

//everytime you do this value console it updates; time that the variable it was created. 

// milisegundos en formato Unix, seconds that passed since that date
const milisegundos = new Date().getTime(); //put the date you want to set since...
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);

//convert to text/number, 3 ways to do it
// 2
 a = parseInt('2'); //use this one, parseinte, letters to numbers change, given there are numbers in the text 
// 2
const b = +'2';
// NaN
const c = +'d';
 d = Number('2');

//tostring, convert numbers into string (text)
const a = 2;
// 2 (pero de tipo string)
console.log(a.toString()); //put the number you want =the a=2 you are converting 2 to a string the "" no matter if there are numbers inside 
//it is a text  
// 2 (pero de tipo string)
console.log(String(a));


//parsefloat from string a float: decimal 
// 2.32
a = parseFloat('2.32'); //do it this way 
// 2.32
b = +'2.32';
// 2.32
 c = Number('2.32');
// 0
 d = Number('');
// NaN
var e = Number('99 88'); //spaces are included, so this would not work 

//it wil come up as false, you can leave it as buleano
const a = false;
// false (pero de tipo string)
console.log(String(a));

//boleano a number 
// 0
console.log(Number(false));
// 1
console.log(Number(true));
// 1
console.log(+true);
// 0
console.log(+false);

//from date to a string
// Sun Apr 22 2018 15:18:13 GMT+0200 (Hora de verano romance)
console.log(String(Date()));
// Sun Apr 22 2018 15:18:13 GMT+0200 (Hora de verano romance)
console.log(Date().toString());

//date to number, milliseconds
 d = new Date();
// 1404568027739
console.log(Number(d));
// 1404568027739
console.log(d.getTime());

//conversion 
// 52 porque 2 es convertido a string, + adds when all the text is made up of numbers
//here 5 is a text, so it conjoins them instead of adding them 
console.log('5' + 2);
// 3 porque 5 es convertido a numérico
console.log('5' - 2); //only work if 5 is a number
// 3 porque 5 y 2 son convertidos a 5 y 2 en numérico
console.log('5' - '2'); 

//-----------------------------------------------------------------------
//length, how many variables in total in the line, not characters. 
//ex.164-165
let d=a+b+c
a=2
b=3
c=3

console.log (a+b+c);
console.log (d) //8
c= 6
console.log (a+b+c);
console.log (d); //(11)

//make hello world show up on the browser
document.write ("hello world escrit en el body")



//. Mostrar por pantalla la expresión 2*3 como texto. 
var str7 = "2*3"

document.write("2*3")

//3. Mostrar por pantalla el resultado de la expresión 2*3.

var numero9 = 2*3

document.write (2*3)

//Ejercicio 3: realiza la siguientes conversiones entre variables de diferente tipo:
//1. De string a number.
//2. De number a string.
//3. De boolean a string.


//marc's version
const v1 = "3"; //text to convert to a string
const v2 = 13 //number to convert to a string
const v3 = true //boleano to convert to a string



console.log(parseInt (v1));//v1 is a string to a number
console.log(v2.toString()); //v2 is a number to a string
console.log(Boolean(v3)); //v3 is a boleano to a string


let name = ''
console.log(prompt(name))