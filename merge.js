// var data = Array.apply(null, {length:1000});
// ES6
// var data1 = Array.from(Array(100).keys());

// Merge 2 Sorted arrays

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

merge([24], [4, 2, 6, 8, 11, 13]);
