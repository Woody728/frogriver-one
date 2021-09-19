//First attempt:

function solution(X, A){
    let newarray = [];
    let val = -1;
    for(i=0; i<A.length; i++){
        if(newarray.includes(A[i])===false){
            newarray.push(A[i]);
            if(newarray.length === X){
                val = i;
                break;
            }
        }
    }
    return val;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(5, [1, 3]));

//Second attempt after being informed about sets:

function solution(X, A){
  let myset = new Set();
  let val = -1;
  for(i=0; i<A.length; i++){
      myset.add(A[i]);
      if(myset.size === X){
          val = i;
          break;
      }
  }
  return val;
}
