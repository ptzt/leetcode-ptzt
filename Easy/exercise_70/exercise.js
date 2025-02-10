var climbStairs = function (n) {
  if (n <= 1) return n;

  let prev2 = 1;
  let prev1 = 1;
  let c = 0;

  for (let i = 2; i <= n; i++) {
    c = prev1 + prev2;
    prev2 = prev1;
    prev1 = c;
  }

  return c;
};

const n = 2, n2 = 3;
climbStairs(n)