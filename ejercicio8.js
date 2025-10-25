/*Ejercicio 8

Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/
const fruits = ['banana', 'orange', 'apple', 'strawberry', 'pear', 'grapes']
const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(stringList) {
  // Creamos un array,llamado longword, vacío en el que se introducirán mediante el siguiente bucle for las longitudes de todos los strings,
  let longword = []
  for (let i = 0; i < stringList.length; i++) {
    let hero = stringList[i]
    for (let j = 0; j <= hero.length; j++) {
      longword[i] = j
    }
  }
  console.log(longword)
  // Ordenamos de menor a mayor las longitudes de caracteres
  const longwordsort = longword.sort((a, b) => a - b)
  //Buscamos el string más largo en el array longwordsort.
  let longest = longwordsort[longwordsort.length - 1]
  // Volvemos a crear en array inicial porque lo tenemos ordenado por sort y no nos sirve
  for (let i = 0; i < stringList.length; i++) {
    let hero = stringList[i]
    for (let j = 0; j <= hero.length; j++) {
      longword[i] = j
    }
  }
  i = 0
  position = []
  // Con el siguiente bucle "while" localizamos el primer string con el mayor número de caracteres.
  while (longword[i] != longest) {
    i = i + 1
    position = i
  }
  console.log(position)
  console.log('El primer nombre más largo es: ' + stringList[position])
}

findLongestWord(fruits)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio8.js
[ 6, 6, 5, 10, 4, 6 ]
 El primer nombre más largo es: strawberry
3 */
findLongestWord(avengers)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio8.js
[ 4, 4, 8, 10, 9, 10 ]
3
El primer nombre más largo es: Captain A. */
