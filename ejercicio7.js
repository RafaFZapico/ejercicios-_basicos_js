/* Ejercicio 7

Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.*/
function greaterNumber(numberOne, numberTwo) {
  if (numberOne < numberTwo) {
    console.log(numberTwo)
  } else {
    console.log(numberOne)
  }
}
greaterNumber(5, 7)
greaterNumber(2, 17)
greaterNumber(9, 1)
// 7 17 9
