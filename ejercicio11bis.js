/*Ejercicio 11
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función:*/
const mixedElements = [2, 3, 'hola', 'hoy']
const list = ['hoy', 'ayer', 'siempre', 2] // 16/4=4
function averageWord(mixedlist) {
  let lengthelement = []
  // bucle for para recorrer el listado mezclado de elementos
  let k = 0
  for (let i = 0; i < mixedlist.length; i++) {
    let element = mixedlist[i]
    if (typeof mixedlist[i] === 'string') {
      lengthelement[k] = element.length
      k++
      /*for (let j = 0; j <= element.length; j++) {
        lengthelement[i] = j
      }*/
    } else {
      lengthelement[k] = element
      k++
    }
  }
  //let countelements = mixedElements.length
  //function average(lengthelement) {
  let sum = lengthelement[0]
  for (let i = 1; i < lengthelement.length; i++) {
    sum = sum + lengthelement[i]
  }
  console.log(lengthelement)
  console.log(sum / mixedlist.length)
}
//average(lengthelement)
//}
averageWord(list)
