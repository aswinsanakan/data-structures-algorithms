// O(n^2) - Quadratic time

function addEachWithAll(array) {
  array.forEach(num1 => {
    array.forEach(num2 => {
      console.log(num1 + num2);
    });
  });
}
