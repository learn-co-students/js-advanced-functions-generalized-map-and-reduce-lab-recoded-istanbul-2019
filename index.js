function map(sourceArray, callbackfn) {
    let newArr = []
    for (let i = 0; i < sourceArray.length; i++) {
      let element = sourceArray[i]
      newArr.push(callbackfn(element))
    }
    return newArr;
  }
  
  
  function reduce(sourceArray, callbackfn, start){
    if(start == null){
        return sourceArray.reduce(callbackfn)
    }
    else {
        return sourceArray.reduce(callbackfn, start)
    }
}