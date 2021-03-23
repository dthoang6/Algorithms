function factorialize(num) {
    if (num == 0 || num == 1) {
      return 1;
    }
    else if (num > 1) {
      var sum = 1;
      for (let i = 2; i <= num; i++) {
        sum *= i;
      }
      return sum;
    }
  }
  
  //good solution
  function factorialize1(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  //using recursion
  function factorialize2(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize2(num - 1);
  }
  factorialize(5);