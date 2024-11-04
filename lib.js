function avg(numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++){
    s += numbers[i];
  }
  return s / numbers.length;
}

function prime(num) {
  let s = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      s++;
    }
  }
  if (s == 1) {
    return true;
  }
  return false;
}

function factorial(num) {
  let s = 1;
  for (let i = num; i > 0; i--) {
    s *= i;
  }
  return s;
}

exports.avg = avg;
exports.prime = prime;
exports.factorial = factorial;