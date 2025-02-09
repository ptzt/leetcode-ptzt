var searchInsert = function (nums, target) {
  let izq = 0;
  let der = nums.length - 1;
  while (izq <= der) {
    let mid = Math.floor((izq + der) / 2)
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      izq = mid + 1;
    } else {
      der = mid - 1;
    }
  }
  return izq;
};

const nums = [1, 3, 5, 6], target = 5
searchInsert(nums, target)