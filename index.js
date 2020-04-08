// Add your functions here

function map(arr,callback){
  let newArr=[];
  
  for(let element of arr){
    newArr.push(callback(element))
  }
  return newArr;
}

function reduce(arr,callback,startingPoint=null){
  //inside callback we will pass acc curr
  let value1=startingPoint;
  
  if(typeof callback(true,true)=="boolean"){
     value1 = true;
  }
  for(let el of arr){
    value1=callback(value1,el)
  }
  
  
  return value1;
}