function binarySearch(array, key) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = start + Math.floor((end - start)/2);
        if (array[middle] === key) {
            return middle;
        }
        if (array[middle] < key) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return -1;
}