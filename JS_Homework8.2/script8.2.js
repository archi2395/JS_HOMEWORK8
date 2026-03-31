function getProduct(a) {
  return function(b) {
    return a * b;
  }
}

const result = getProduct(5)(2);
console.log(result); 