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
// variante 1
const toys2 = []
let j = 0
for (const i of toys) {
  if (i.name.includes('gato') === false) {
    toys2[j] = i
    j++
  }
}
console.log('El listado queda de la siguiente manera: ', toys2)
/*
PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio19.js
El listado queda de la siguiente manera:  [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 60, name: 'Nerf Blaster' }
] */
