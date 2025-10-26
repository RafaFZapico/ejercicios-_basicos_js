/* Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función:*/
const listado = [
  'ketchup',
  'ketchup',
  'ketchup',
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'pizza',
  'pizza',
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
//const listado = ['a', 'a', 'a', 'b', 'c', 'b', 'a', 'a']
//  esta función elimina los duplicados y los repetidos.
function removeDuplicates(list) {
  // bucle for que recorre el array "listado"
  let vfor = 1
  for (let i = 0; i < listado.length; i++) {
    let j = i + 1
    console.log(
      'elemento ',
      i,
      ' del array listado es: ',
      listado[i],
      ' y el elemento ',
      j,
      'es: ',
      listado[j]
    )
    //bucle while que compara uno a uno y elimina los elementos duplicados.
    let vwhile = 1
    while (j <= listado.length) {
      console.log('Dime el valor de i en esta vuelta')
      if (listado[i] === listado[j]) {
        console.log('hay duplicados')
        console.log(listado[i], ' ', listado[j])
        listado.splice(j, 1)
        // i = 0
      } else {
        j++
      }
      //console.log(listado)

      console.log('vuelta bucle while: ', vwhile)
      vwhile++
    }
    // Este condicional if elimina los repetidos del final del listado.
    /*if (listado[i] === listado[j]) {
      console.log('hay duplicados "2º" ')
      listado.splice(i, 1)
      i = 0
    }*/
    console.log('vuelta del bucle for: ', vfor)
    vfor++
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
