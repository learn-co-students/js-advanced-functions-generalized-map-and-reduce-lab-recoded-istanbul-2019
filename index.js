// Add your functions here
function map(arr,f){
  const newArr = [...arr];
  for(let i=0 ; i < newArr.length ; i++ ){
    newArr[i] = f(newArr[i]);
  }
  return newArr;
}

function reduce(arr,f,start=null){
  let i= 0;
  if(start === null){
    start = arr[0];
    i=1;
  }
  for(i ; i< arr.length ; i++){
    start = f(arr[i],start);
  }
  return start;
}
