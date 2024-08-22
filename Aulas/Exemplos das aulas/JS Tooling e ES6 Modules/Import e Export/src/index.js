// import { nome2, sobrenome, idade, soma, Pessoa as OutroNome } from './modulo1'

// import * as MeuModulo from './modulo1'

import Pessoa, { nome, sobrenome} from './modulo1'

const p1 = new Pessoa(nome, sobrenome)
console.log(p1)