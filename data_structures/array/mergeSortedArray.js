/**
 * merge two sorted array
 * array1 [0, 3, 4, 31]
 * array2 [4, 6, 30]
 */

function mergeSortedArray(array1, array2) {
  const mergeArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    if (!array1Item || array1Item < array2Item) {
      //check if item of value is at the end of array
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergeArray;
}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
