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
  for (let i = 0; i < list.length; i++) {
    let j = i + 1
    //bucle while que compara uno a uno y elimina los elementos duplicados.
    while (j <= list.length) {
      if (list[i] === list[j]) {
        list.splice(j, 1)
      } else {
        j++
      }
    }
  }
  console.log('Listado sin duplicados: ', list)
}

removeDuplicates(listado)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio12.js   
Listado sin duplicados:  [
  'ketchup',     'sushi',
  'pizza',       'burger',
  'potatoe',     'pasta',
  'ice-cream',   'chicken',
  'onion rings', 'soda',
  'beer'
]*/
