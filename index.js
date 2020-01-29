

function map(x, y) {
    let newArr = [];
    for (const z of x) {
      let n = y(z);
      newArr.push(n);
    }
    return newArr;
  }
  
  function reduce(x, y, int=0) {
    let newval = int;
  
    if (typeof y(true, true) == 'boolean') {
      newval = true;
    }
  
    for (const z of x) {
      newval = y(newval, z);
    }
  
    return newval;
  }