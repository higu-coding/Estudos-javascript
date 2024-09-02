// Caso alguma dependencia do node modules fosse instalada, quando for dar o 'require' não é necessário colocar o caminho do arquivo, por ex.
const path = require('path')
const axios = require('axios')
//

const { Pessoa } = require('./mod1')
const mod1 = require('./mod1')

const p1 = new Pessoa('João')
console.log(mod1)
console.log(p1)