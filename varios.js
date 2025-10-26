/*a = ['a', 'c', 'a', 'd', 'b', 'd']
b = a.reverse()
console.log(b)*/
//listado = ['a', 'b', 'c', 'a', 'd', 'e', 'b']
listado = ['a', 'a', 'a', 'b', 'c', 'a', 'a', 'a']
/*listado = [
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
let vfor = 1
for (let i = 0; i < listado.length; i++) {
  let j = i + 1
  console.log('listado[i] vale: ', listado[i], 'listado[j] vale: ', listado[j])

  let vwhile = 1
  while (listado[i] != listado[j] && j < listado.length - 1) {
    j = j + 1
    position = j

    console.log('i vale: ', i, ' j vale: ', j)
    console.log(
      'listado[i] vale: ',
      listado[i],
      'listado[j] vale: ',
      listado[j]
    )
    if (listado[i] === listado[j]) {
      listado.splice(i, 1)
      i = 0
    }

    console.log('vuelta bucle while nº ', vwhile)
    vwhile = vwhile + 1
  }
  if (listado[i] === listado[j]) {
    listado.splice(i, 1)
    i = 0
  }
  console.log('vuelta bucle for nº ', vfor)
  vfor = vfor + 1
}
console.log(listado)
// Funciona!!!!!!!! Elimina los duplicados y también si están repetidos más de dos veces.
