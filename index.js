// Add your functions here
function map(sourceArray, fn) {
  let newArr = []
  sourceArray.forEach(element => {
    newArr = [...newArr, fn(element)]
  });
  return newArr
}

function reduce(sourceArray, fn, acc = 0) {
  let total;
  if (acc) {
    total = acc;
    sourceArray.forEach(element => {
      total = fn(element, total);
    })
  } else {
    total = sourceArray[0];
    sourceArray.forEach((element, index) => {
      if (index !== 0) {
        total = fn(element, total);
      }
    })
  }
  return total;
}