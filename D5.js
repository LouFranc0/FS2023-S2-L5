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
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets1 = ['dog', 'cat', 'hamster' , 'redfish']
console.log(pets1.sort())
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const pets2 = ['dog','cat', 'hamster', 'redfish']
console.log(pets2.reverse())
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets3 = ['dog', 'cat', 'hamster', 'redfish'];

if (pets3.length >= 1) {
  const firstPet = pets3.shift(); 
  pets.push(firstPet); 
}

console.log(pets3); 
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
  }
]
cars.forEach(function(car){
  car.licensePlate = '000000';
})
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const car2 = {
  brand: 'Fiat',
  model: 'Punto',
  color: 'silver',
  trims: ['lyfe', 'style', 'r-line'],
  licensePlate: '00000',
};
cars.push(car2);

cars.forEach(function(car) {
  if (car.trims.length > 0) {
    car.trims.pop();
  }
});
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.trims.length > 0) {
    justTrims.push(car.trims[0]);
  }
}

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const cars3 = [
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
];

cars3.forEach(function(car) {
  if (car.color.charAt(0).toLowerCase() === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let index = 0;

while (index < numericArray.length) {
  const currentValue = numericArray[index];

  if (currentValue === 32) {
    break; 
  }

  console.log(currentValue);
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

const positionsArray = charactersArray.map((char) => {
  char = char.toLowerCase(); 

  switch (char) {
    case 'a':
      return alfabeto.indexOf(char) + 1;
    case 'b':
      return alfabeto.indexOf(char) + 1;
    case 'c':
      return alfabeto.indexOf(char) + 1;
    case 'd':
      return alfabeto.indexOf(char) + 1;
    case 'e':
      return alfabeto.indexOf(char) + 1;
    case 'f':
      return alfabeto.indexOf(char) + 1;
    case 'g':
      return alfabeto.indexOf(char) + 1;
    case 'h':
      return alfabeto.indexOf(char) + 1;
    case 'i':
      return alfabeto.indexOf(char) + 1;
    case 'j':
      return alfabeto.indexOf(char) + 1;
    case 'k':
      return alfabeto.indexOf(char) + 1;
    case 'l':
      return alfabeto.indexOf(char) + 1;
    case 'm':
      return alfabeto.indexOf(char) + 1;
    case 'n':
      return alfabeto.indexOf(char) + 1;
    case 'o':
      return alfabeto.indexOf(char) + 1;
    case 'p':
      return alfabeto.indexOf(char) + 1;
    case 'q':
      return alfabeto.indexOf(char) + 1;
    case 'r':
      return alfabeto.indexOf(char) + 1;
    case 's':
      return alfabeto.indexOf(char) + 1;
    case 't':
      return alfabeto.indexOf(char) + 1;
    case 'u':
      return alfabeto.indexOf(char) + 1;
    case 'v':
      return alfabeto.indexOf(char) + 1;
    case 'w':
      return alfabeto.indexOf(char) + 1;
    case 'x':
      return alfabeto.indexOf(char) + 1;
    case 'y':
      return alfabeto.indexOf(char) + 1;
    case 'z':
      return alfabeto.indexOf(char) + 1;
    default:
      return -1; 
  }
});

console.log(positionsArray); 
