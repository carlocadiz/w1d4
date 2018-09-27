var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function customSort(arr){
  arr.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA === nameB){
      return a.age + b.age;
    }
    if (nameA < nameB) {
     return -1;
    }
    return 1;

});
}

customSort(students);
console.log(students);