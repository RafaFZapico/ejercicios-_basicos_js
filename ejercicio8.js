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
  let longword = []
  for (let i = 0; i < avengers.length; i++) {
    let hero = avengers[i]
    for (let j = 0; j <= hero.length; j++) {
      longword[i] = j
    }
  }
  console.log('El array longword se compone de :', longword)
  // Ya tenemos el array longword completo.
  let longwordsort = longword.sort((a, b) => a - b)
  console.log('El array ordenado se compone de:', longwordsort)
  if (
    longwordsort[longwordsort.length - 1] ===
      longwordsort[longwordsort.length - 2] ||
    longwordsort[longwordsort.length - 3] ===
      longwordsort[longwordsort.length - 1] ||
    longwordsort[longwordsort.length - 4] ===
      longwordsort[longwordsort.length - 1]
  ) {
    console.log('Hay varios elementos iguales, de la mayor longitud.')
  }
  let longest = longwordsort[longwordsort.length - 1]
  console.log('El nombre más largo contiene:', longest, 'caracteres')
}
findLongestWord(avengers)
