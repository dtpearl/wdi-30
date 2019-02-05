const bros = "Groucho Harpo Chico Zeppo".split(' ');

// .each for arrays and objects
_(bros).each(function (b) {
  console.log( b.toUpperCase() );
});

// .map for arrays and objects
const upperBros = _(bros).map(function (b) {
  return b.toUpperCase();
});

console.log( bros, upperBros );

// .find for objects and array
const numbers = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6];
const firstEven = _(numbers).find(function (n) {
  return n % 2 === 0;
});
console.log( firstEven );

// .filter
const evens = _(numbers).filter(function (n) {
  return n % 2 === 0;
});
console.log('evens', evens);

// .where
const library = [
  {author: 'James Joyce', title: 'Dubliners'},
  {author: 'James Joyce', title: 'Ulysses'},
  {author: 'Dan Brown', title: 'The Da Vinci Code'},
  {author: 'James Joyce', title: 'Finnegans Wake'},
];

// const joyceBooks = _(library).filter(function (b) {
//   return b.author === 'James Joyce';
// });

const joyceBooks = _(library).where( {'author': 'James Joyce'} );
console.log( joyceBooks );

// .pluck
const bookTitles = _(library).pluck('title');
console.log(bookTitles);

// Max and Min
const scores = [24, 23, 65, 99, 18, 0.5];
console.log( _(scores).max(), _(scores).min() );

// shuffle
console.log( _(scores).shuffle() );
