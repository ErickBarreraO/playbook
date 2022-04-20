/* 
Al exportar una función/objeto así:
>module.exports.verbose
Estaremos exportando el contenido con el nombre "verbose"
module.exports hará que puedas invocar esta fucnión en otro script como:
> const logger = require('./logger')
y usala como:
>logger.verbose("Heeeey!")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}
