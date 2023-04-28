function invert(numbers) {
    return numbers.map(num => -num);
  }

  console.log(invert([1, 2, 3, 4, 5])); 
  console.log(invert([1, -2, 3, -4, 5]));
  console.log(invert([])); 