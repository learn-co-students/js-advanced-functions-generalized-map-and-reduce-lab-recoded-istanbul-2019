function map(sourceArray, callback){
let array = [];
  for(let i =0;i<sourceArray.length;i++){
    array.push(callback(sourceArray[i]));
  }
return array;
}
function reduce(sourceArray, callback, starting){
  if(starting!=undefined){
       return sourceArray.reduce(callback)+starting;
   }
   return sourceArray.reduce(callback);



}
