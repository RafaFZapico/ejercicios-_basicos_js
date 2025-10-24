/*Ejercicio 23
Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
Imprime cada array por consola. */
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]
const shortfilm = []
const featurefilm = []
const mediumlength = []
let j = 0
let k = 0
let l = 0
for (const i of movies) {
  if (i.durationInMinutes < 100) {
    shortfilm[j] = i
    j++
  } else if (i.durationInMinutes >= 100 && i.durationInMinutes < 200) {
    mediumlength[k] = i
    k++
  } else {
    featurefilm[l] = i
    l++
  }
}
console.log('Cortometrajes: ', shortfilm)
console.log('Mediometrajes: ', mediumlength)
console.log('Largometrajes: ', featurefilm)
