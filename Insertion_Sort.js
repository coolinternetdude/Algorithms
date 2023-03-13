function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
      if (arr[i] !== currentVal) arr[j] = currentVal;
    }
  }
  return arr;
}

insertionSort([38, 4, 12, 10, 49, 28, 28]);
