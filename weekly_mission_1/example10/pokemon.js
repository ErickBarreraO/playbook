/*
  export default nos permite exportar esta clase e importara
*/

export default class MyPokemon {
    constructor (name) {
      this.name = name
    }
    sayHello(message) {
        console.log (`Mi pokemon ${this.name} dice ${message}`)
    }

    log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }