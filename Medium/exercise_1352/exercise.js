
var ProductOfNumbers = function () {
  this.prefixProduct = [1];
  this.lastZeroIndex = -1;
};

/** 
* @param {number} num
* @return {void}
*/
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.prefixProduct = [1];
    this.lastZeroIndex = this.prefixProduct.length - 1;

  } else {
    this.prefixProduct.push(this.prefixProduct[this.prefixProduct.length - 1] * num);
  }
};

/** 
* @param {number} k
* @return {number}
*/
ProductOfNumbers.prototype.getProduct = function (k) {
  const n = this.prefixProduct.length;

  if (this.lastZeroIndex >= n - k) {
    return 0;
  }

  return this.prefixProduct[n - 1] / this.prefixProduct[n - 1 - k];
};

/** 
* Your ProductOfNumbers object will be instantiated and called as such:
* var obj = new ProductOfNumbers()
* obj.add(num)
* var param_2 = obj.getProduct(k)
*/