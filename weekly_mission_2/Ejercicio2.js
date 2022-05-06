// Lista de Explorers
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//Imprime el nombre (pripiedad name) de cada explorer en la lista, usa FOR EACH 
explorers.forEach(name => console.log(name))

//Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(stack => console.log(stack))

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorersStacks = explorers.map(function(stack){return stack})
console.log("Nueva lista usando MAP")
console.log(explorersStacks)

//Obten una lista de explorers que tengan en su stack "js" usa FILTER (para validar un elemento en una lista se usa el método includes)
/*
const explorersJS = explorers.filter((stack) => 
    stack.includes('js')
);
console.log(explorersJS)
*/

//Busca el primer explorer que sea de la CDMX, usa FIND
const CDMX = explorers.find((city) => city = "CDMX")
console.log(CDMX)

//Obtén la suma de todos los exercises_completed, usa REDUCE (Revisar)
const ejercicios_completados = explorers.reduce((acc, exercises_completed) => acc + exercises_completed)
console.log(ejercicios_completados)
//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const finished = explorers.some((exercisesFinished) => exercisesFinished===true)
console.log(finished)

//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const terminado = explorers.every((isFinished) => typeof isFinished === true)
console.log(terminado)