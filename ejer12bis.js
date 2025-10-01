let eraser = ['a', 'd']
let duplicates = ['a', 'a', 'a', 'd', 'd', 'd']
const original = ['a', 'a', 'a', 'd', 'd', 'd']
let ordinals = []
for (let j = 0; j < eraser.length; j++) {
  console.log('bucle for inicial. Vuelta nº ', j + 1)
  console.log('eraser: ', eraser[j])

  for (let i = 0; i < original.length; i++) {
    let counter = 1
    console.log('bucle for anidado. Vuelta:', i + 1)
    console.log('original: ', original[i], 'eraser: ', eraser[j])

    if (original[i] === eraser[j] && counter < 2) {
      console.log('son iguales: ' + eraser[j], ' ', original[i])
      ordinals[i] = i
      duplicates.splice(i, 1)
      console.log(
        'duplicates: ',
        duplicates,
        'original ',
        original,
        'counter= ',
        counter
      )
      counter = counter + 1
      console.log('counter= ', counter)
    }

    /*if ((j = eraser.length - 1)) {
      return
    }*/
  }
}
console.log('---------------------------')
console.log('fin de bucles')
console.log('duplicates: ', duplicates)
console.log('eraser: ', eraser)
console.log('original: ', original)
console.log('ordinals= ', ordinals)
