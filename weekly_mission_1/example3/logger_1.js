/* 
    Esto también esla declaración de una fucnión

    module.exports hará que puedas invocar esta función en otro script como:
    > const logger = require('./logger')
    y usala como:
    >logger("Heeey!")
*/

module.exports = (message) => {
    console.log(`info: ${message}`)
}
