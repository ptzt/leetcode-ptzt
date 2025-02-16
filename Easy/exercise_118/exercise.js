var generate = function (numRows) {
  if (numRows === 1) return [[1]];

  let res = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = res[i - 1];
    let newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    res.push(newRow);
  }

  return res;
};