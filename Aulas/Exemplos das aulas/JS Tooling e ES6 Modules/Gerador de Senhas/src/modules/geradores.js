const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))

console.log(geraMinuscula())