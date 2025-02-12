var maximumSum = function (nums) {
  let maxSum = -1;
  let map = new Map();

  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  for (let num of nums) {
    let sumD = sumDigits(num);

    if (map.has(sumD)) {
      maxSum = Math.max(maxSum, num + map.get(sumD));
      map.set(sumD, Math.max(map.get(sumD), num));
    } else {
      map.set(sumD, num);
    }
  }

  return maxSum;
};
