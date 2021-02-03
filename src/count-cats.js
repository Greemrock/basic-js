module.exports = function countCats(matrix) {
  let result = matrix.flat().filter(item => item === '^^');
  return +result.length;
};
