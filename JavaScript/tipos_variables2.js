//si la suma de a y b es mayor que la suma de c y d
// let a=1,b=2,c=3,d=4
 
// if (a+b > c+d) {
//      console.log("sum of a+b is greater than the sum of c+d")
//  }
//  else   {
//      console.log ("sum of a+b is not greater than the sum of c+d")
//  }

//ex.3

// let angulo1=90, angulo2=60, angulo3=30  

//  if (angulo1+ angulo2 +angulo3===180) {
//  document.write ("the sum of the three angles is 180")
//  }
//  else  {
//      document.write ("the sum of the three angles is not 180")
//  }

//Ejercicio 4: escribe un programa con una variable de tipo number (a) y un condicional que evalúe si el entero es par o impar utilizando el operador %.

//  let a=892379393 
//  if (a % 2 == 0) {
//  console.log ("a is par")
//   }
//   else {
//  console.log ("no es par")
//   }

 //ejercicio 5: Ejercicio 5: escribe un programa que dado tres números imprima por pantalla cuál es elmayor. Ejercicio 6: ¿cuál es el resultado de ejecutar el siguiente código?

//  let number1=4, number2=8, number3=3 
// if (number1>number2 && number1>number3 ) {
//     console.log ("number1 es el mayor ")
// else if (number2>number3) {
//     console.log ("el number2 es el mayor");
// }
// else { 
//     console.log ("el numero3 es el mayor")
// }
// }
//then compare the greatest one of the two with numbre 1, no point comparing the small one of this condition to 1
//if true then compare the numbet to to number one, if it is false compare the number 3 with number 1 S

 const a = 4;
 switch (a) {
 case 1:
 console.log('El valor de a es 1');
 break;
 case 2:
 console.log('El valor de a es 2');
 break;
 case 3,4:
 console.log('El valor de a es 3 ó 4');
 break;
 default:
 console.log('El valor de a es desconocido');
 } //default if none of the other cases are done

const dia="lunes";  
switch (dia) {
case "Lunes": 
console.log ("hoy es lunes");
break;
case "martes": 
console.log("hoy es martes");
break;
case "miercoles": 
console.log("hoy es miercoles");
break;
case "jueves": 
console.log("hoy es jueves");
break;
case "viernes": 
console.log("hoy es viernes");
break;
case "sabado": 
console.log("hoy es sabado");
break;
default: 
console.log("hoy es domingo");
}

//0= lunes - 6:Sabado 

const date= new Date();
let day = date.getDay ();
  
switch (dia) {
case 1: 
console.log ("hoy es lunes");
break;
case 2: 
console.log("hoy es martes");
break;
case 3: 
console.log("hoy es miercoles");
break;
case 4: 
console.log("hoy es jueves");
break;
case 5: 
console.log("hoy es viernes");
break;
case 6: 
console.log("hoy es sabado");
break;
case 0: 
console.log("hoy es domingo");
default:
console.log ("no")
}

const fecha=new Date ();
let month = date.getMonth();
switch (month) {
    case 0: 
    console.log ("hoy es enero");
    break;
    case 1: 
    console.log("hoy es febrero");
    break;
    case 2: 
    console.log("hoy es marzo");
    break;
    case 3: 
    console.log("hoy es abril");
    break;
    case 4: 
    console.log("hoy es mayo");
    break;
    case 5: 
    console.log ("hoy es junio");
    break;
    case 6: 
    console.log("hoy es julio");
    break;
    case 7: 
    console.log("hoy es agosto");
    break;
    case 8: 
    console.log("hoy es septiembre");
    break;
    case 9: 
    console.log("hoy es octubre");
    break;
    case 10:
    console.log("hoy es noviembre");
    break;
    case 11:
    console.log("hoy es diecembre");
    break;   
}

//50 al 1
//example 
for (let i = 0; i < 5; i++) {
    // 0, 1, 2, 3, 4 (en distintas líneas)
    console.log(i);
    }
    const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
    const len = array.length;
    // recorre un array mediante un for clásico
    for (let i = 0; i < len; i++) {
    // En, un, lugar, de, la, mancha (en distintas líneas)
    console.log(array[i]);

// console.log("es un bonito" + dia "de " +month)
    }

// buccle from 1-50 incremento
for(let i=1; i<=50; i++) {
    console.log(i);
}

// buccle from 50-1 decremento //greater or equal to one = i>=1
for(let i=50; i>=1; i--) {
    console.log(i);
}
        
//next ex
for(let i=0; <=10; i++) {
    document.write("5 x" +i+ " = " +i*5+"<br>" ) //skip a line, timsing 5 x i (up to 10) and you get 5 multiples until 5 times 10. text what will show,  multiply, 5 x (number 1-10 =i)=
}

//ex.11 from page 171 Ejercicio 11: escribe un programa que pida al usuario un número entero positivo
//(mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número
//hasta cero, utilizando comas como separación.

let wholEnum =prompt ("Escribe un numero entero positivo");

for(let i=wholEnum ; i>=0; i--)
if(i>0) {
document.write(i + ",");
}
else {
document.write (i);
}

//shows on screen 5,4,3,2,1,0 

//while, while condition is being done, fo these actions while (variable condition action ++)
// while

//do while
let contador2=0;
do {
  contador2++;  
} while (contador2 <=5);

/////
let contador1 = 0;
while (contador1 <= 5) {
contador1++;
}
console.log(contador1); //shows 6

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//do 11,10,9, 8 con while 
//8// numeros 1-50
let numero4=0
while (numero4 <=50); {
console.log(numero4);
numero4++;
}


//Ejercicio 9: escribe un programa que imprima toda la tabla de multiplicar del 5 (desde 0  hasta 10).
//with let

let numero6=0
while (numero6 <=10) { 
document.write("5 x" +numero6+ " = " +numero6*5+"<br>" );
 numero6++;
}


//ex. 10 Ejercicio 10: escribe un programa que pida al usuario una palabra (mediante la función prompt) y lo muestre por pantalla 10 veces.

let palabra8=prompt
while ("palabra8" ) {
    document.write 
}


//Ejercicio 11: escribe un programa que pida al usuario un número entero positivo (mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número hasta cero, utilizando comas como separación.

let wholEnum =prompt ("Escribe un numero entero positivo");
while (wholEnum >=0) {
    if(wholEnum>0) {
        document.write(wholEnum + ",");
        }
        else {
        document.write (wholEnum);
        }
    wholEnum--;
}

