function map(arr, arr2){
    // Create an empty array mapArr.
    const arr3 = [];
    // Loop through array elements.
    for(let i=0;i<arr.length;i++){
        let result = arr[i];
        arr3.push(arr2(result));
    }
    return arr3;
}


function reduce(sourceArray, combine, start=null) {
    if (start == null) {
        start = sourceArray[0]
        for (let i = 1; i < sourceArray.length; i++)
        start = combine(start, sourceArray[i]);
    } else{
    for (let i = 0; i < sourceArray.length; i++)
      start = combine(start, sourceArray[i])
    }
    return start;
  }