function getDigitNaive(num, place) {
  return parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
      .substring(place, place + 1)
  );
}

// Maths solution

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxNum = 1;
  arr.forEach((el) => (maxNum = Math.max(maxNum, digitCount(el))));
  return maxNum;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}

radixSort([23, 254, 4689, 7612]);
