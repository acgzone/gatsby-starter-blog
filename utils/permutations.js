function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const { testFunc } = require('./testFunc');
testFunc(() => {
  // permute([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  permute([1, 2, 3, 4])
}, 1);

var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};


// For testing:
var print = function (input) {
  // console.log(input);
}

testFunc(() => {
  heapsPermute([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], print);
  // permute(, 10, 11, 12, 13])
}, 1)