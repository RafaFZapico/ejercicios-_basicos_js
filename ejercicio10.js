/* Ejercicio 10
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla:*/
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let sum = numberList[0]
  for (let i = 1; i < numberList.length; i++) {
    sum = sum + numberList[i]
  }
  console.log(sum / numberList.length)
}
average(numbers)
