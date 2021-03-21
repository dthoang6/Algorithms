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
  
  factorialize(5);