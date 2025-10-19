/*Ejercicio 13
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que exist dentro de dicho array. Esta función comprueba si exist el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:*/
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder() {
  let name = 'Bruce'
  let exist
  let position
  for (let i = 0; i < names.length; i++) {
    if (name === names[i]) {
      exist = 'yes'

      position = i + 1
    }
  }
  console.log(Boolean(exist))
  if (Boolean(exist) === true) {
    console.log('El nombre está anotado en la ' + position + 'ª posición')
  }
}

nameFinder(names)

// true
// El nombre está anotado en la 8ª posición
