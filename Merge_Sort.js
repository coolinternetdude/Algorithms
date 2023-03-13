function merge(arr1, arr2) {
  let results = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      results.push(arr2[j]);
      j++;
    }
  }

  if (j < arr2.length) results.push(...arr2.slice(j));
  if (i < arr1.length) results.push(...arr1.slice(i));

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([56, 3, 9, 1, 8, 12, 6, 7, 2]);
