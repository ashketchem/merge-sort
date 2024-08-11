function fib(n) {
   if (n == 0) {
     return [];
  } else if (n == 1) {
     return [0];
  } else if (n == 2) {
       return [0, 1];
   }
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    let fibseq = sequence[i - 1] + sequence[i - 2];
     sequence.push(fibseq);
  }
  return sequence;
}

function fibres(n) {
   if (n == 0) {
     return [];
   } else if (n == 1) {
     return [0];
   } else if (n == 2) {
     return [0, 1];
   } else {
   const sequence = fibres(n-1);

  let fibnext = sequence[sequence.length -1] + sequence[sequence.length -2];
     sequence.push(fibnext);
    return sequence  
   }
}
