let i = 8
listado = ['a', 'a', 'b', 'b', 'c', 'a', 'c', 'c', 'd']
//bucle while para recorrer un array
/*while (i < listado.length && i >= 0) {
  console.log(listado[i])
  //console.log('vuelta del bucle while: ', i)
  i++
}
//a a b b c a c c d  Funciona correctamente
*/
// Bucle while para contar elementos repetidos.
let j = i + 1
let counter = 1
while (j > i && j < listado.length) {
  if (listado[i] === listado[j]) {
    counter++
  }
  j++
}
console.log(listado[i], counter)
// Funciona correctamente.
