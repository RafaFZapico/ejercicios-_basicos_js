/* Ejercicio 10
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla:*/
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let sum = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  console.log(sum / numbers.length)
}
average(numbers)
