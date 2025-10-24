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
for (const i of toys) {
  if (i.name.includes('gato') === false) {
    console.log('Estos son los qu no hay que eliminar')
    console.log(i)
    toys2[j] = i
    j++
  }
}
console.log(toys2)
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
