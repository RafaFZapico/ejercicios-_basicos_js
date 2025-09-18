//Dado el siguiente array:
const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
//4.1 - Saca a "Tendo" por consola atacando su posición.
//4.2 - Coloca en el último lugar de este array a "Cervasio".
//4.3 - Cambia el primer elemento de este array por "Bambina".
//4.4 - Dale la vuelta a este array.
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.

// 1 Saca a "Tendo" por consola atacando su posición.
aldeanos.splice(3, 1)
console.log('Solución 1: ' + aldeanos) // Solución 1: Fibrilio,Narciso,Vacarena,Nendo
// 2 Coloca en el último lugar de este array a "Cervasio".
aldeanos.push('Cervasio')
console.log('Solución 2: ' + aldeanos) // Solución 2: [ 'Fibrilio', 'Narciso', 'Vacarena', 'Nendo', 'Cervasio' ]
// 3 Cambia el primer elemento de este array por "Bambina".
aldeanos.splice(0, 1, 'Bambina')
console.log('Solución 3: ' + aldeanos) // Solución 3: [ 'Bambina', 'Narciso', 'Vacarena', 'Nendo', 'Cervasio' ]
// 4 Dale la vuelta a este array.
aldeanos.reverse()
console.log('Solución 4: ' + aldeanos) // Solución 4: [ 'Cervasio', 'Nendo', 'Vacarena', 'Narciso', 'Bambina' ]
// 5 Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice(3, 1, 'Canela')
console.log('Solución 5: ' + aldeanos) //  Solución 5: [ 'Cervasio', 'Nendo', 'Vacarena', 'Canela', 'Bambina' ]
// 6 Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// 1ª opción
console.log('Solución 6: ' + aldeanos[aldeanos.length - 1]) // Solución 6: Bambina
// 2ª opción
for (let pos = 0; pos <= aldeanos.length; pos++) {
  if (pos === aldeanos.length - 1) {
    console.log('Solución 6 bis: ' + aldeanos[pos]) // Solución 6 bis: Bambina
  }
}
