/*Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
Puedes usar este array para probar tu función:*/
/*const list = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]*/
let listado = ['a', 'a', 'b', 'b', 'c', 'a', 'c', 'c', 'd']
/*let listado = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]*/
function countRepeated(listado) {
  let element
  let j = 0
  let names = []
  let i = 0
  let busc
  let rep = []
  let k = 0
  let l
  // Declaración de la funcion stringFinder que nos busca un elemento dentro de un array.
  function stringFinder() {
    for (let i = 0; i < names.length; i++) {
      if (busc === names[i]) {
        element = undefined
        return element
      } else {
        element = 'no'
      }
    }
  } //Fin de la función stringFinder.

  // 1 Inicio de programa con bucle 1 while.
  let vwhile = 1
  while (j >= 0 && j < listado.length) {
    if (names.length === 0) {
      element = 'no'
    } else {
      busc = listado[j]
      //2 llamada a stringFinder para buscar el elemento de listado[j] en el array names, nos dirá a través de la variable "element" si existe o no
      stringFinder(names)
    }

    // 3 condicional if.
    // Si elemento listado[j] no existe lo registramos en el array names y contamos el número de veces que aparece.
    if (element === 'no') {
      names[k] = listado[j]
      l = j + 1
      let counter = 1
      // bucle while para contar elementos repetidos en el array listado.
      while (l > j && l < listado.length) {
        if (listado[j] === listado[l]) {
          counter++
        }
        l++
      }
      rep[k] = counter
      j++
      k++
    } else {
      j++
    }
  }
  for (let s = 0; s < names.length; s++) {
    console.log(names[s], ':', rep[s])
  }
}
countRepeated(listado)
// Con listado=['a', 'a', 'b', 'b', 'c', 'a', 'c', 'c', 'd']
/*a : 3
b : 2
c : 3
d : 1
 */

/* Con listado=['code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code']*/

/*code : 4
repeat : 1
eat : 1
sleep : 3
enjoy : 2
 */
