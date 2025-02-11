var removeOccurrences = function (s, part) {
  while (s.indexOf(part) !== -1) {
    let index = s.indexOf(part);
    s = s.slice(0, index) + s.slice(index + part.length);
  }
  return s;
};

const s = "daabcbaabcbc", part = "abc"

console.log(removeOccurrences(s, part))