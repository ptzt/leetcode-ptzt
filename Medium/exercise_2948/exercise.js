// let nums = [1, 5, 3, 9, 8]
// let limit = 2

var lexicographicallySmallestArray = function (nums, limit) {
  groups = []
  numToGroup = {}

  let sortedNums = [...nums].sort((a, b) => a - b)

  for (let n of sortedNums) {
    if (groups.length === 0 || Math.abs(n - groups[groups.length - 1][groups[groups.length - 1].length - 1]) > limit) {
      groups.push([])
    }
    groups[groups.length - 1].push(n)

    if (!numToGroup[n]) {
      numToGroup[n] = []
    }

    numToGroup[n].push(groups.length - 1)
  }

  let res = []
  for (let n of nums) {
    let groupIndex = numToGroup[n].shift()
    res.push(groups[groupIndex].shift())
  }
  return res
};


console.log(lexicographicallySmallestArray(nums, limit))
