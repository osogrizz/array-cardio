const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolas', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = ['Beck, Glen', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
  'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
  'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those born in the 1500's

let result = inventors.filter(inventor => inventor.year >=1500 && inventor.year < 1600);
console.table(result);

// Array.prototype.map()
// 2. Give us an array of the inventors  first and last names
let names = inventors.map(inv => `${inv.first}, ${inv.last} `);
console.table(names);

//Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let oldest = inventors.sort((a, b) => a.year - b.year);
console.table(oldest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let totalAge = inventors.reduce((acc, curr) => {
  return acc + (curr.passed - curr.year);
}, 0);

console.log(totalAge);

// 5. Sort the inventors by years lived.


// 6. Create a list of boulevards in Parus that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort excercise
// Sort people aphabetically by last name.

// Reduce excercise
// 8. Sum up th instance of each of these.
