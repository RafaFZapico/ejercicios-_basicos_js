const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]
//? Este bucle for...of y el condicional if funcionan.
const toys2 = []
let j = 0
let position = 0
let positions = []
let k = 0
for (const i of toys) {
  if (i.name.includes('gato') === true) {
    console.log('Estos son los que hay que eliminar')
    console.log(typeof i)
    console.log(i)
    positions[k] = position
    k++
  }
  position++
}
console.log(positions)
let l = 0
let m = 0
for (let i = 0; i < toys.length; i++) {
  console.log('En este punto i vale: ', i)
  if (i === positions[l] - m) {
    console.log(positions[l] - m)
    //console.log('i vale:', i)
    console.log('El objeto que vamos a borrar es: ', toys[i])
    toys.splice(i, 1)
    l++
    m++
    i = i - 1
    //console.log('ahora i vale: ', i, ' y m vale: ', m)
    //console.log('aquí l vale:', l)
  }
}
console.log(toys)
/*let vfor = 1
for (const i of toys) {
  if (i.name.includes('gato') === true) {
    console.log('el objeto a borrar es: ', i)
    toys.splice(i, 1)
    i = i - 1
  }
  console.log('vuelta del bucle for...of nº: ', vfor)
  vfor++
}
console.log(toys)*/
/*
PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejer19ter.js
Estos son los qu hay que eliminar
{ id: 40, name: 'Rascador de gato' }
Estos son los qu hay que eliminar
{ id: 40, name: 'FurReal Friends gato interactivo' }
Estos son los qu hay que eliminar
{ id: 71, name: 'Sylvanian Families - Familia gato' }
*/
//Todo el código de abajo no funciona.
/*let position = 0
let vbucle = 1
for (const i of toys) {
  console.log('nº de vuelta del bucle for...of:', vbucle)
  if (i.name.includes('gato')) {
    console.log('Este objeto es el que hay que borrar:')
    console.log(i)
    console.log('se encuentra en la posición:', position)
    toys.splice(position, 1)
    position = position - 1
  } else {
    console.log('posición en el array toys: ', position)
    position++
  }
  console.log('------------------------------------')
  vbucle++
}
console.log(toys)*/
// toys.splice()
