var plusOne = function (digits) {
  let newArr = digits.join("");
  newArr = (parseInt(newArr) + 1).toString();

  const backToArray = newArr.split("").map(Number);
  return backToArray;
};

const digits = [1, 2, 3];
plusOne(digits);


