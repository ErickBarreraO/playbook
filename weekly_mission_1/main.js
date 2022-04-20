// 1. Cración de un objeto con propiedades

let myCar = new Object(); // <- Sirve para crear un objeto
myCar.make = 'Ford'; // Guardando un valordentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) //Imprimiendo objeto

// Declaración de un objeto con variables locales y públicas

const myModule = (() => {
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy un valor que va a ser expuesto"
    
    const exported ={
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
            publicBaz: baz
    }
    return exported
})()

console.log(myModule)