/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets2 = ['dog', 'cat', 'hamster', 'redfish']
pets2.sort()
console.log(pets2)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const pets3 = ['dog', 'cat', 'hamster', 'redfish']
pets3.reverse()
for (let i = 0; i < pets3.length; i++) {
  console.log(pets3[i])
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets4 = ['dog', 'cat', 'hamster', 'redfish']
pets4.push(pets4[0])
pets4.splice(0, 1)
console.log(pets4)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = false
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const myCars = {
  brand: 'Opel',
  model: 'Astra',
  color: 'black',
  trims: ['life', 'style', 'statio wagon'],
  licensePlate: true,
}
if (
  myCars.brand &&
  myCars.model &&
  myCars.color &&
  myCars.trims &&
  myCars.licensePlate
) {
  cars.push(myCars)
}
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0].toLowerCase() === 'b') {
    console.log(cars[i].color, 'Fizz')
  } else {
    console.log(cars[i].color, 'Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

const listNumber = []
let number = 0
let position = 0
while (number !== 32) {
  listNumber.push(numericArray[position])
  number = numericArray[position]
  position++
  if (position >= numericArray.length) {
    number = 32
    console.log("32 doesn't exist!")
  }
}
console.log(listNumber)

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let pos = []
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      pos.push('1')
      break
    case 'b':
      pos.push('2')
      break
    case 'c':
      pos.push('3')
      break
    case 'd':
      pos.push('4')
      break
    case 'e':
      pos.push('5')
      break
    case 'f':
      pos.push('6')
      break
    case 'g':
      pos.push('7')
      break
    case 'h':
      pos.push('8')
      break
    case 'i':
      pos.push('9')
      break
    case 'j':
      pos.push('10')
      break
    case 'k':
      pos.push('11')
      break
    case 'l':
      pos.push('12')
      break
    case 'm':
      pos.push('13')
      break
    case 'n':
      pos.push('14')
      break
    case 'o':
      pos.push('15')
      break
    case 'p':
      pos.push('16')
      break
    case 'q':
      pos.push('17')
      break
    case 'r':
      pos.push('18')
      break
    case 's':
      pos.push('19')
      break
    case 't':
      pos.push('20')
      break
    case 'u':
      pos.push('21')
      break
    case 'v':
      pos.push('22')
      break
    case 'w':
      pos.push('23')
      break
    case 'x':
      pos.push('24')
      break
    case 'y':
      pos.push('25')
      break
    case 'z':
      pos.push('26')
      break
    default:
      console.log(charactersArray[i], 'Error: is not a letter')
  }
}
console.log(pos)
