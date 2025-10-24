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
const names = []
const position = []
for (let i = 0; i < toys.length; i++) {
  names[i] = toys[i].name
}
console.log(names)
// El siguiente bucle for of no funciona.
/*for (const i of toys) {
  //console.log(toys[i].name.includes('gato'))
  if (toys[i].name.includes('gato')) {
    console.log(toys[i])
  }
}*/
// El siguiente bucle for si funciona e imprime por consola los juguetes que contienen nombre de gato.

for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    console.log(toys[i])
  }
}
