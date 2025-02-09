var lengthOfLastWord = function (s) {
  const newArr = s.split(" ").filter(n => n)
  return newArr[newArr.length - 1].length
};

const s = "Hello World"
const s2 = "   fly me   to   the moon  "
lengthOfLastWord(s2)