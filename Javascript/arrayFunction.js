function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  var newArr = [];
  arr.forEach(function (val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  var splitArr = str.toLowerCase().split("");
  var obj = {};
  var vowels = "aeiou";

  splitArr.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}
// Foreach implementation

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Filter implementation

function filter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) newArr.push(arr[i]);
  }
  return newArr;
}

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

function find(arr, searchValue) {
  return arr.filter(function (val) {
    return val === searchValue;
  })[0];
}

function findInObj(arr, key, searchValue) {
  return arr.filter(function (val) {
    return val[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  var vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (val) {
      return val * 2;
    });
}

// MAP

// map implementation
function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

function doubleValues(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (val, idx) {
    return val * idx;
  });
}

function extractValue(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (val) {
    return val.first + " " + val.last;
  });
}

// Some

// Some implementation

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

//Every implementation

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}

function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function (val) {
      return val === "0";
    });
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return key in val;
  });
}

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function (val) {
    return val[key] === searchValue;
  });
}
// Reduce implementation
const nums = [5, 3, 9, 5, 7, 5, 7];

nums.reduce(function (accumulator, nextVal) {
  if (nextVal in accumulator) {
    accumulator[nextVal]++;
  } else {
    accumulator[nextVal] = 1;
  }
  return accumulator;
}, {});

function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

function vowelCount(str) {
  var vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .reduce(function (acc, next) {
      if (vowels.indexOf(next) !== -1) {
        if (acc[next]) {
          acc[next]++;
        } else {
          acc[next] = 1;
        }
      }
      return acc;
    }, {});
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

function partition(arr, callback) {
  return arr.reduce(
    function (acc, next) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}
