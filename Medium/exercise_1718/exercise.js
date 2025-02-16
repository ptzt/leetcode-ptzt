var constructDistancedSequence = function (n) {
  const length = 2 * n - 1;
  const result = new Array(length).fill(0);
  const used = new Set();

  function backtrack(index) {
    if (index === length) return true;

    if (result[index] !== 0) return backtrack(index + 1);

    for (let num = n; num >= 1; num--) {
      if (used.has(num)) continue;

      if (num === 1) {
        result[index] = 1;
        used.add(1);

        if (backtrack(index + 1)) return true;

        result[index] = 0;
        used.delete(1);
      } else {
        let secondIndex = index + num;
        if (secondIndex < length && result[secondIndex] === 0) {
          result[index] = result[secondIndex] = num;
          used.add(num);

          if (backtrack(index + 1)) return true;

          result[index] = result[secondIndex] = 0;
          used.delete(num);
        }
      }
    }
    return false;
  }

  backtrack(0);
  return result;
};