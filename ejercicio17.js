/*Ejercicio 17
For...in: Usa un for...in para imprimir por consola los datos del alienígena.
Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"
Puedes usar este objeto: */
const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}
for (const vari1 in alien) {
  console.log('La propiedad ', vari1, 'tiene como valor: ', alien[vari1])
}
/* La propiedad  name tiene como valor:  Xenomorph
La propiedad  species tiene como valor:  Xenomorph XX121
La propiedad  origin tiene como valor:  Unknown
La propiedad  weight tiene como valor:  180 */
