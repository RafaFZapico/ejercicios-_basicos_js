/*Ejercicio 19
Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).
Recuerda usar la función .includes() para comprobar la palabra.
Puedes usar este array:*/
const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]
//? variante 1

const toys2 = []
let j = 0
for (const i of toys) {
  if (i.name.includes('gato') === false) {
    toys2[j] = i
    j++
  }
}
console.log('El listado queda de la siguiente manera: ', toys2)
/* RESULTADO 
PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio19.js
El listado queda de la siguiente manera:  [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 60, name: 'Nerf Blaster' }
] */
//? Variante 2

let position = 0
let positions = []
let k = 0
for (const i of toys) {
  if (i.name.includes('gato') === true) {
    positions[k] = position
    k++
  }
  position++
}
let l = 0
let m = 0
for (let i = 0; i < toys.length; i++) {
  if (i === positions[l] - m) {
    toys.splice(i, 1)
    l++
    m++
    i = i - 1
  }
}
console.log(toys)
/* RESULTADO 2
PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio19.js
[
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 60, name: 'Nerf Blaster' }
]
*/
