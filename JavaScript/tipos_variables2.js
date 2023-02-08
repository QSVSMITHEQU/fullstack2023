//si la suma de a y b es mayor que la suma de c y d
// let a=1,b=2,c=3,d=4
 
if (a+b > c+d) {
     console.log("sum of a+b is greater than the sum of c+d")
 }
 else   {
     console.log ("sum of a+b is not greater than the sum of c+d")
 }

//ex.3

// let angulo1=90, angulo2=60, angulo3=30  

 if (angulo1+ angulo2 +angulo3===180) {
 document.write ("the sum of the three angles is 180")
 }
 else  {
     document.write ("the sum of the three angles is not 180")
 }

//Ejercicio 4: escribe un programa con una variable de tipo number (a) y un condicional que evalúe si el entero es par o impar utilizando el operador %.

 let a=892379393 
 if (a % 2 == 0) {
 console.log ("a is par")
  }
  else {
 console.log ("no es par")
  }

 //ejercicio 5: Ejercicio 5: escribe un programa que dado tres números imprima por pantalla cuál es elmayor. Ejercicio 6: ¿cuál es el resultado de ejecutar el siguiente código?

 let number1=4, number2=8, number3=3 
if (number1>number2 && number1>number3 ) {
    console.log ("number1 es el mayor ")
else if (number2>number3) {
    console.log ("el number2 es el mayor");
}
else { 
    console.log ("el numero3 es el mayor")
}
}
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
default;
console.log ("no")
}

const fecha=new Date ();
let month= date.getMonth();
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
    console.log("hoy es dieciembre");
    break;   
}

console.log("es un bonito" +dia "de" +month)