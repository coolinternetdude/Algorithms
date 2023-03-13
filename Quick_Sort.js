function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let piv = 0;
  for (let i = start; i <= end; i++) {
    if (arr[0] > arr[i]) {
      piv++;
      swap(arr, piv, i);
    }
  }
  swap(arr, 0, piv);
  return piv;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left Side
    quickSort(arr, left, pivotIndex - 1);
    // right Side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);
