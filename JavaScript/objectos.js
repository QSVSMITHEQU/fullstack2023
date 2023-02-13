// obligatorio utilizar function para posteriomente crear objetos con new
const Person = function(name) { //public, accessible
    // atributo público porque está declarado con this
    this.name = name || '';
    // atributo privado porque está declarado con const
    const lastname = 'González'; //privado, not acessble unles you open the objeto 
    // atributo privado porque está declarado con const
    const myName = this.name; //receive the name person puts in
    //privado, cant put peron=lastname to find it 

    //functions, using the attributes,//functions combines the attributes added in all these categories 
    const fullName = () => {
    return myName + ' ' + lastname; //it'll give back the atttributes given in a line, name, space and lastname
        };
     // método público porque está declarado con this
     this.introduce = () => {
     return 'Hola, mi nombre es ' + fullName();
        };
    }

  
    /////////////////////
const oscar = new Person('Óscar');
// Óscar
console.log(oscar.name); //show name on console
// Hola, mi nombre es Óscar González
console.log(oscar.introduce()); //public so you can access. 

// undefined porque el atributo es privado
console.log(oscar.lastname);
// error porque el método no privado y no se puede acceder a él (es undefined) e invocar
a undefined genera un error
console.log(oscar.fullName());

//to create a new person with all the subcategories and funcitons, heridated the base, it is another object that has the same attributes and funcitons (last name, myname, fullname and introduce)
const oscar=new Person ("oscar"); //hello my name is oscar gonzalez; the name given in the basic one and is put on the oscar or any other new object person that you create
console.log(oscar.name); 

//197

///Ejercicio 1: escribe un programa que liste el nombre de las propiedades del siguiente objeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy",sclass : "VI", rollno : 12 }
const person=function("David");
this.name = name || '';
const lastname = 'Ray'; 
const myName = this.name;
const fullName = () => {
return myName + ' ' + lastname; 
        };
this.introduce = () => {
return 'Hola, mi nombre es ' + fullName();
        };

    //for of and for in. //object keys saves it in an array 


//Ejercicio 2: escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. A continuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.

  
// Ejercicio 2: escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. A
// continuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.

let obj_1 = { x: 1, y: 2, z: 3 };
    let obj_2 = { a: 1, y: 2, z: 1 };

    let keys1 = Object.keys(obj_1); // [x ,y ,z ]
    let keys2 = Object.keys(obj_2);

    for (let i = 0; i < keys1.length; i++) {
        for (let j = 0; j < keys2.length; j++) {
            if ( keys1[i] == keys2[j] ) {
                console.log(La key del obj_1: "${keys1[i]}" en la pos[${i}] es igual a la key del obj_2: "${keys2[j]}" en la pos[${j}]);
            }
            // console.log(obj_1.keys1[i]); ASI NOOOOOOO
            if ( keys1[i] == keys2[j] && obj_1[keys1[i]] == obj_2[keys2[j]]) {
                console.log(La key[${keys1[i]}] y valor[${obj_1[keys1[i]]}] de los obj_1 y obj_2 son IGUALES);
            }
        }
    }


//Ejercicio 3: escribe un programa que declare dos objetos: { x: 1, y: 2, z: 3 } y { a: 1, y: 2, z: 1 }. A continuación, comprueba qué nombres de propiedades son coincidentes y cuáles son también coincidentes en valor.

const coordenadas2= { x: 1, y: 2, z: 3}
const coordenadas3= { a: 1, y: 2, z: 1}

if 

else


 
//Ejercicio 1 del proyecto: escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.

let gestor= {
    nombre: "Pep",
    dinero: 200,
    numero: "cuenta X"
};
let cliente= {
    nombre: "Juan",
    numCuenta:384829,
    saldoDisponible:300
    
};
let mensaje= {
    emisor:"Juan",
    receptor:"Pep",
    mensaje: "hole gestor"

};
let transferencia={
    emisor;34087,
    receptor: 47834,
    DineroTransferencia:400
};

//ex
let gestor3= object.keys(gestor);//shows the property of nombre, dinero, numero of gestor  
for (const key of gestor3) {
    console.log(key); 
}
let cliente3= object.keys(cliente);//shows the property  cliente  
for (const key of cliente3) {
    console.log(key); 
}

let mensaje3= object.keys(mensaje);//shows the property mensaje  
for (const key of mensaje3) {
    console.log(key); 
}

let transferencia3= object.keys(transferencia);//shows the property transferencia  
for (const key of transferencia3) {
    console.log(key); 
}

//funciones en pagina 176 
//Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.
function sumar(a, b) {
    return console.log(a + b);
    }
    // 5
    sumar(2, 3);

//de flecha 
const funcion2 = altura => 5 * altura / 2;



//Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.