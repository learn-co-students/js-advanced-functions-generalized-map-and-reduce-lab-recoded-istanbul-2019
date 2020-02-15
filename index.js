// Add your functions here
function map(src,fn){
  let r = [];
  // let ra = [];
  for (let i=0;i <src.length;i++){
    r.push(fn(src[i]))
    
  }
  return (r)
}


function reduce(src,fn,ind){
  let ra = [];
  let sum;
  if (ind!==undefined){
    sum =ind
    
    for (let i=0;i<src.length;i++){
      sum = fn(src[i],sum)
    
    }}
    else{
      ind=src[0]
      for (let i=1;i<src.length;i++){
        sum = fn(src[i],ind)
    
  } }
    return sum
  
}

// newMapNegative([1,2,3,4,5],fn)

// // console.log(newMap([1,2,4]))
// function newMapOr(src,fn){
//   let r = [];
//   fn = function(){
//     for (let i=0;i<src.length;i++){
//       r.push(src[i])
//     }
//     return r
//   }
  
//   return fn()
// }


// function newMapTwo(src,fn){
//   let r = [];
//   fn = function(){
//     for (let i=0;i<src.length;i++){
//       r.push(2*src[i])
//     }
//     return r
//   }
  
//   return fn()
// }

// function newMapTwo(src,fn){
//   let r = [];
//   fn = function(){
//     for (let i=0;i<src.length;i++){
//       r.push(src[i]*src[i])
//     }
//     return r
//   }
  
//   return fn()
// }