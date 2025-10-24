/*Ejercicio 21
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
//! Variante 1
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    console.log('Usuarios menores de edad: ', users[i].name)
  } else {
    console.log('Usuarios mayores de edad: ', users[i].name)
  }
}
/*
Usuarios mayores de edad:  Tony
Usuarios mayores de edad:  Peter
Usuarios menores de edad:  Natasha
Usuarios mayores de edad:  Bruce
Usuarios menores de edad:  Khamala
*/
// ! Variante 2
console.log('                                                      ')
const underage = []
const adult = []
let j = 0
let k = 0
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    underage[j] = users[i]
    j++
  } else {
    adult[k] = users[i]
    k++
  }
}
console.log('Usuarios menores de edad: ', underage)
console.log('-------------------------------------------------')
console.log('Usuarios mayores de edad: ', adult)
/*
Usuarios menores de edad:  [ { name: 'Natasha', years: 14 }, { name: 'Khamala', years: 16 } ]
Usuarios mayores de edad:  [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Bruce', years: 32 }
]
*/
