// CALLBACKS REVIEW ////////////////////////////////////////////////////////////

// A callback is a function passed to another function which calls the first function on our behalf.

// Timers : order will be A, C, B //////////////////////////////////////////////
console.log('A: Before setTimeout');
setTimeout(function () {
  console.log('B: time has passed...');
}, 4000);
console.log('C: After setTimeout');

// Document ready order will be A, C, B ////////////////////////////////////////
console.log('A: before the document is ready');
$(document).ready(function () {
  console.log('B: the document is now ready');
});
console.log('C: after the document is ready');


// Event handlers: Groucho, Harpo (and then maybe) Chico Chico Chico ///////////
console.log('Groucho');
$(document).on('click', function () {
  console.log('Chico');
});
console.log('Harpo');

// You are not expected to understand this /////////////////////////////////////
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const each = function (someArray, callback) {
  for (let i = 0; i < someArray.length; i++) {
    callback( someArray[i] );
  }
};

// Ruby equivalent:
// colours.each do |c|
//   puts c
// end

each(colours, function (v) {
  console.log(v);
});

const brothers = ['Groucho', 'Harpo', 'Chico'];

each(brothers, function (b) {
  alert(b.toUpperCase());
});

// .forEach added is ES5 (also .map, .reduce)
brothers.forEach(function (brother) {
  console.log(brother.toLowerCase(), 'Marx');
});
