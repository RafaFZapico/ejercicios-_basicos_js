/*Ejercicio 13
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

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
function nameFinder(nameList) {
  let array = []
  let name = 'Marc'
  for (let i = 0; i < names.length; i++) {
    if (name === names[i]) {
      console.log('El nombre existe y es: ', names[i])
      let position = i + 1
      console.log('El nombre está anotado en la ' + position + 'ª posición')
    }

    if (name != names[i]) {
      array[i] = names[i]
    }

    //console.log(array)
  }
  if (array.length === names.length) {
    console.log('no existe')
  }
}

nameFinder(names)
