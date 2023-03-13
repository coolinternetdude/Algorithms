class ArraySet {
  constructor() {
    this.values = [];
  }
  add(value) {
    if (!~this.values.indexOf(value)) {
      this.values.push(value);
    }
  }
}

const randNums = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 4000)
);

const benchmarkSet = (nums) => {
  console.time("benchmarkSet");
  const set = new Set(nums);
  console.timeEnd("benchmarkSet");
};

const benchmarkArray = (nums) => {
  console.time("benchmarkArray");
  const arr = new ArraySet();
  nums.forEach((n) => arr.add(n));
  console.timeEnd("benchmarkArray");
};

benchmarkSet(randNums);
benchmarkArray(randNums);
