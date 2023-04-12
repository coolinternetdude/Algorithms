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
  console.log(arr);
  return piv;
}

pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 18], 1);

// [28,4,11,16,1,14,40,41,36,42,18] ==> first iteration nothing happens
//pivIn
// second iteration [28,4,41,11] piv = 1
// third iteration  [28,4,11,41]
