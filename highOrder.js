
var words = ["ground", "control", "to", "major", "tom"];

function myMap(input, type) {
  var result = [];
  input.forEach(function(element) {
    result.push(type(element));
  })
  return result
}

function long(word) {
 return word.length;
}

function upper(word) {
 return word.toUpperCase();
}

function rev(word) {
 return word.split('').reverse().join('');
}

console.log(myMap(words,long));
console.log(myMap(words,upper));
console.log(myMap(words, rev));
