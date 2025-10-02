//eliminar duplicados

let eraser = ['a', 'd']
let original = ['a', 'd', 'a', 'd']
let duplicates = ['a', 'd', 'a', 'd']
//console.log(duplicates)
j = 0
for (let i = 0; i < original.length; i++) {
  console.log(original[i])
  if (original[i] === eraser[j]) {
    console.log(original[i], eraser[j])
    k = 0
    duplicates.splice(0, 1)
    console.log(i, ' ', duplicates)
    j = j + 1
  }
}

console.log('---------------------------')
console.log('fin de bucles')
console.log('duplicates: ', duplicates)
console.log('eraser: ', eraser)
console.log('original: ', original)
