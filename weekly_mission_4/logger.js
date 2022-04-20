class Logger {
    constructor(name) { //"this" es una variable para referencias el valor ek valor del contexto local de esta clase 
        this.name = name //Éstas variables se le conoce como atributos
    }


    // método
    //this.name es la variable que se guarda en el contexto local
    //message es una variable que se le pasa al ejecutar este método

    info (message) {
        console.log(`[objeto con nombre: ${this.bame}] info: ${message}`)
    }

    //método 
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// Esta clase se exporta en este módulo
module.exports = Logger