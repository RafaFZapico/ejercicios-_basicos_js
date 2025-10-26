/*Ejercicio 11
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función:*/
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(mixedlist) {
  let lengthelement = []
  // bucle for para recorrer el listado mezclado de elementos
  let k = 0
  for (let i = 0; i < mixedlist.length; i++) {
    let element = mixedlist[i]
    if (typeof mixedlist[i] === 'string') {
      lengthelement[k] = element.length
      k++
    } else {
      lengthelement[k] = element
      k++
    }
  }
  let sum = lengthelement[0]
  // bucle for, que suma el contenido del array lengthelement
  for (let i = 1; i < lengthelement.length; i++) {
    sum = sum + lengthelement[i]
  }
  console.log(lengthelement)
  console.log(sum / mixedlist.length)
}
averageWord(mixedElements)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios-_basicos_js> node ejercicio11.js   
[
  6, 1, 6,  1, 11,
  2, 8, 8, 10
]
5.888888888888889
*/
