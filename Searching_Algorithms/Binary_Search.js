function binarySearch(arr, val) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var middle = Math.round((left + right) / 2);
    if (val > arr[middle]) left = middle;
    else if (val < arr[middle]) right = middle;
    else return middle;
  }
  return -1;
}

binarySearch([1, 3, 5, 7, 9, 11, 25, 37, 45], 111);
