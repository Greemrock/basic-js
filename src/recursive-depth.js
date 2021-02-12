const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for (let i of arr) {
      let d = 1;
      if (Array.isArray(i)) {
        d += this.calculateDepth(i);
        if (depth < d) {
          depth = d;
        }
      }
    }

    return depth;  
  }
};