/*
* Ten en cuenta:
    -require('./logger') te dará el objeto creado
    -require('./logger') .Logger te regresará la clase
    
* En esta caso estamos agregadno una función más al objeto instanciado, no a la clase.
* */
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}
