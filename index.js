// Add your functions here
sourceArray=[1, 2, 3, -9];

// function mapToSquare(sourceArray){
//   let array=sourceArray.map(e => {return e*e});
//   return array;
// }
//map([1, 2, 3, -9], mapToSquare);


function map(sourceArray,fn){
  let newArry=[];
  for(let i=0;i<sourceArray.length;i++)
  {
    let e=fn(sourceArray[i]);
    newArry[i]=e;
  }
  return newArry;
// return sourceArray.map(fn);
}

function reduce(sourceArray,fn,startingPoint=undefined){
  let valueReturn;
  let x;
  if(startingPoint==undefined)
   { 
     valueReturn=sourceArray[0];
    x=1;
   }
  else
 { 
   valueReturn=startingPoint;
   x=0;
   
 }
  for(let i=x;i<sourceArray.length;i++)
  {
    valueReturn=fn(sourceArray[i],valueReturn);
  }
  return valueReturn;
// return sourceArray.map(fn);
}

