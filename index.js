function map(src, cb) {
  let retVal = []
  src.forEach(e =>  retVal.push(cb(e))) 
  return retVal;
}

function reduce(src, cb, starting){
  let retVal = (!starting) ? src[0]:starting 
  for (let i = (!starting) ? 1 : 0; i < src.length; i++) {
    retVal = cb(src[i], retVal)
  }
  return retVal;
}
