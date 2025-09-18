//1. Luke Skywalker cumple años:
const jedi = { nombre: 'Luke Skywalker', edad: 19 }
// Tu código para cambiar la edad aquí...
console.log(jedi.nombre)
console.log(jedi.edad + 6)

//2. Presentación al estilo Leia Organa:
let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20
console.log(
  `Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`
)
console.log(
  'Soy ' +
    nombre +
    ' ' +
    apellido +
    ', tengo ' +
    edad +
    ' años y soy una princesa de Alderaan'
)
// 3. Calculando el coste total de sables de luz:
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

// Tu código para calcular el precio total aquí...
console.log(sable1.precio + sable2.precio)

// 4. Actualizando el precio final de las naves:
let precioBaseGlobal = 10000

// Cambia el precio base en esta linea modificando la variable

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

// Tu código para actualizar el precio final de cada nave aquí...
precioBaseGlobal = precioBaseGlobal + 15000
console.log('El precioBaseGlobal actualizado es: ' + precioBaseGlobal)

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal
console.log('nave1', nave1)
console.log('nave2', nave2)
