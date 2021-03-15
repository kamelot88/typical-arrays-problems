
exports.min = function min (array) {
  let sortAr = array.sort((a, b) => a-b);
  return sortAr[0];
}

exports.max = function max (array) {
  let sortAr = array.sort((a, b) => a-b).reverse();
  return sortAr[0];
}

exports.avg = function avg (array) {
  let sortAr = array.reduce((acc, item) => acc + item) / array.length;
  return sortAr;
}



  