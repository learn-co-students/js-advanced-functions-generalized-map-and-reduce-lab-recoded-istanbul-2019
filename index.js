// Add your functions here

function map(array, callback){

    let newArr=[];
    for(let i =0; i<array.length; i++){
      newArr.push(callback(array[i]));
      }
    return newArr;
  }


  // function reduce(array, callback, startingPoint=0){
  //   let newValue = startingPoint
  //   for (let i = 0; i < array.length; i++) {
  //     newValue = callback(newValue, array[i])
  //   }
    
  //   return newValue;
  // }


  function reduce(sourceArray, callback, starting){
    if(starting!=undefined){
         return sourceArray.reduce(callback)+starting;
     }
     return sourceArray.reduce(callback);
  }
