//return an array consisting of the largest number from each provided sub-array
function largestOfFour(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      let largest = arr[i][0];
      for(let j = 0 ; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j];
        }
        a[i] = largest;
      }
      console.log(largest);
    }
    return a;
  }