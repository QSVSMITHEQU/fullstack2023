// función de flecha para la SUMA
//Página 176 ejercicios 1 y 2
const sumar = (param1,param2) => {
    return param1 + param2;
};
console.log(sumar(6,3));

// forma simplificada de la función de flecha
const sumarSimple = (param1,param2) => param1 + param2;
console.log(sumarSimple(6,3));

// función de flecha para RESTA
const restar = (param1,param2) => {
    return param1 - param2;
};
console.log(restar(6,3));
// forma simplificada de la función de flecha
const restarSimple = (param1,param2) => param1 - param2;
console.log(restarSimple(6,3));

// función de flecha para la multiplicación
const multiplicar = (param1,param2) => {
    return param1 * param2;
};
console.log(multiplicar(6,3));
// forma simplificada de la función de flecha
const multiplicarSimple = (param1,param2) => param1 * param2;
console.log(multiplicarSimple(6,3));

// función de flecha para la división
const dividir = (param1,param2) => {
    return param1 / param2;
};
console.log(dividir(6,3));
// forma simplificada de la función de flecha
const dividirSimple = (param1,param2) => param1 / param2;
console.log(dividirSimple(6,3));

//page 177 Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientasde desarrollador --> Source) para comprobar cómo se ejecuta el programa.

    // ahora el callback está integrado en la invocación de la función smar
 
    const callback = (resultado) => {}
   


//Ejercicio 4: adaptar el ejercicio anterior para integrar el callback en la invocación de las cuatro funciones, en lugar de creándola como una función de callback por separado.Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.
const sumar = (a, b, callback) => {
    callback(a + b);
    };sumar(1, 2, (resultado) => {
    console.log(resultado);
    });

const dividir = (a, b, callback) => {
      callback(a/b);
        };
    dividir(1, 2, (resultado) => {
     console.log(resultado);
        });

const multiplicar (a, b, callback) => {
  callback(a* b);
      };
  multiplicar(1, 2, (resultado) => {
console.log(resultado);
              });
          
const restar (a, b, callback) => {
    callback(a - b);
        };
    restar(1, 2, (resultado) => {
  console.log(resultado);
                });


    
//Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones invoquen el callback una vez han transcurrido 1 segundo (para la función sumar),  segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos para dividir (para la función dividir). Añadir un console.log en la última línea del código del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa

// const sumar (a,b, callback) =>{
//     setTimeout((sumar) => {
//         console.log('se ejecuta después de 1 segundos');
//         }, 1000);
// }

//const restar (a,b, callback) =>{
// setTimeout((restar) => {
// console.log('se ejecuta después de 2 segundos'); }, 2000);
// }

// const multiplicar (a,b, callback) =>{
// setTimeout((multiplicar) => {
// console.log('se ejecuta después de 3 segundos'); }, 3000); 
// }

// const dividir (a,b, callback) =>{ setTimeout((dividir) => {
//     console.log('se ejecuta cada 4 segundos'); }, 4000);
// }


function add(a,b, call){
    setTimeout(()=>{
        call(a+b)
    console.log ('se ejecuta después de 1 segundos');
    }, 1000)
}

function restar(a,b calla)

