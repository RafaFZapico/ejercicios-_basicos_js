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
function averageWord(list) {
  let lengthelement = []
  for (let i = 0; i < mixedElements.length; i++) {
    let element = mixedElements[i]
    if (typeof mixedElements[i] === 'string') {
      for (let j = 0; j <= element.length; j++) {
        lengthelement[i] = j
      }
    } else {
      lengthelement[i] = mixedElements[i]
    }
  }
  let countelements = mixedElements.length
  function average(lengthelement) {
    let sum = lengthelement[0]
    for (let i = 1; i < lengthelement.length; i++) {
      sum = sum + lengthelement[i]
    }
    console.log(sum / lengthelement.length)
  }
  average(lengthelement)
}
averageWord(mixedElements)
