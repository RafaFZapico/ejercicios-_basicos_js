/* Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función:*/
/*const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]*/
const duplicates = ['a', 'c', 'a', 'd', 'b', 'd']
const original = duplicates
const eraser = []
console.log('El listado con duplicados es: ', original)
function removeDuplicates(list) {
  let j
  // bucle para recorrer el array "original"
  for (let i = 0; i < original.length; i++) {
    console.log('vuelta del bucle for que recorre el array "original": ' + i)
    let x = original[i]
    console.log('elemento seleccionado de original: ' + i + ' º')
    j = i + 1
    console.log('i vale: ' + i)
    console.log('j vale: ' + j)
    // bucle while para comparar un elemento del array con todos los demás
    while (j < original.length) {
      console.log('vuelta de bucle while: ' + j)
      //console.log(duplicates.length + ' elementos tiene el array duplicates')
      console.log(original[i])
      console.log(original[j])
      // condicional que detecta si hay un elemento duplicado
      if (x === original[j]) {
        console.log('se cumple condición if')
        console.log('hay un duplicado y es: ' + duplicates[j])
        //a continuación añadimos al final del array eraser un elemento duplicado.
        eraser[eraser.length] = original[i]
        console.log('el array eraser es: ', eraser)
      }
      j = j + 1
    }

    console.log('i vale: ' + i)
    console.log('j vale: ' + j)
  }
  // El código anterior funciona perfectamente si hay duplicados, pero no funciona correctamente si se repite más de dos veces.
  //let eraser = ['a', 'd']
  // Segundo bucle for para borrar los duplicados.
  /*for (let i = 0; i < eraser.length; i++) {
    let j = 0
    console.log(
      'bucle for para borrado. Vuelta:  ',
      i,
      '   j vale: ',
      j,
      '   i vale: ',
      i
    )
    let counter = 1

    console.log(' 1 el array eraser es: ', eraser)
    let k = i
    while ((eraser[k] = original[j] && counter < 2)) {
      console.log('bucle while para borrado. Vuelta: ', counter)
      console.log('counter', counter)
      console.log(
        '2 el array eraser es: ',
        eraser,
        'duplicates es: ',
        duplicates
      )
      console.log('conteo a: ' + counter)
      console.log(original[j], '=', eraser[k])
      if ((original[j] = eraser[k] && counter < 2)) {
        console.log('Se cumple la condición if, son iguales.')
        console.log(original[j], '=', eraser[k])
        duplicates.splice(j, 1)
        console.log('Se borra duplicado y queda: ', duplicates)
      } else {
        console.log('son distintos')
        console.log(original[j], '=', eraser[k])
      }

      j = j + 1
      console.log('6 el array eraser es: ', eraser)
      counter = counter + 1
    }
    k = k + 1
  }
  console.log(eraser)
  console.log(duplicates)*/

  // console.log('El listado sin duplicados es: ' + duplicates)
}
removeDuplicates(duplicates)
