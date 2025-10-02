/* Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función:*/
const listado = [
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
]
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

removeDuplicates(duplicates)
