/*Ejercicio 8

Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/
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
  for (let i = 0; i < avengers.length; i++) {
    let hero = avengers[i]
    for (let j = 0; j <= hero.length; j++) {
      longword[i] = j
    }
  }
  // Ordenamos de menor a mayor las longitudes de caracteres
  const longwordsort = longword.sort((a, b) => a - b)
  //Buscamos la cantidad de caracteres que tienen los string más largos en la variable longest
  let longest = longwordsort[longwordsort.length - 1]
  // Volvemos a crear en array inicial porque lo tenemos ordenado por sort y no nos sirve
  for (let i = 0; i < avengers.length; i++) {
    let hero = avengers[i]
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
  console.log('El primer nombre más largo es: ' + avengers[position])
}

findLongestWord(avengers)
