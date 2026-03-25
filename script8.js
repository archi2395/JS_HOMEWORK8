const sum = (function () {
  let total = 0;
  return function (num) {
    total += num;
    return total;
  }
})();

console.log(sum(8)); 
console.log(sum(12));  
console.log(sum(20)); 
console.log(sum(27)); 