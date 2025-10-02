/* Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función:*/
const listado = [
  'ketchup',
  'ketchup',
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
  'soda',
  'beer',
  'beer',
  'beer'
]
//  esta función elimina los duplicados y los repetidos.
function removeDuplicates(list) {
  // bucle for que recorre el array "listado"
  for (let i = 0; i < listado.length; i++) {
    let j = i + 1
    //bucle while que compara uno a uno los elementos en busca de duplicados.
    while (listado[i] != listado[j] && j < listado.length - 1) {
      j = j + 1
      position = j
      if (listado[i] === listado[j]) {
        listado.splice(i, 1)
        i = 0
      }
    }
    if (listado[i] === listado[j]) {
      listado.splice(i, 1)
      i = 0
    }
  }
  console.log('Listado sin duplicados: ', listado)
}

removeDuplicates(listado)
/* // 'ketchup',   'sushi',
  'burger',    'potatoe',
  'ice-cream', 'pizza',
  'chicken',   'onion rings',
  'pasta',     'soda',
  'beer'  */
