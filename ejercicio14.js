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
let names = []
let rep = []
function repeatCounter(list) {
  let i = 0
  // recorremos el array listado
  while (i < listado.length && i >= 0) {
    console.log('bucle 1 while')
    let k = 0
    // Si el elemento  seleccionado ha sido contado pasamos al siguiente.
    if (listado[i] != names[i]) {
      let k = 0
      let j = i + 1
      let counter = 1
      while (j > i && j < listado.length) {
        j++

        // El elemeno seleccionado está repetido y con el condicional if y la variable counter contamos el número de veces que está repetido.
        if (listado[i] === listado[j]) {
          counter++
        }
      }
      // Guardamos en un dos arrays el nombre del elemento del listado y el número de veces que aparece en el listado.
      names[k] = listado[i]
      rep[k] = counter
      k++
      // En caso de que el elemento seleccionado no haya sido contado, lo contamos.
    } else {
      i++
    }
    console.log(listado[i])
  }
}
for (let l = 0; l < names.length; l++) {
  console.log('El texto ', names[l], ' aparece: ', rep[l], ' vez/veces')
}
repeatCounter(listado)
