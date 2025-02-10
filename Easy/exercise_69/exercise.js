var mySqrt = function (x) {
  let izq = 0;
  let der = x;
  while (izq <= der) {
    let mid = Math.floor((izq + der) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      izq = mid + 1;
    } else {
      der = mid - 1;
    }
  }
  return der;
};


const x = 4, x2 = 8;
mySqrt(x)