function mergesort(arr) {
   if ( arr.length == 1) {
     return arr;
   } else {
     midpoint = Math.floor(arr.length / 2);
     left = mergesort(arr.slice(0, midpoint));
     right = mergesort(arr.slice(midpoint, arr.length));

     return sorted(left, right);
   }
}

function sorted(left, right) {
   const final = [];
   let l = 0;
   let r = 0;
   while (l < left.length && r < right.length) {
     if (left[l] < right[r]) {
     final.push(left[l]);
       l++;
     } else {
     final.push(right[r]);
       r++;
     }
   }
  while (l<left.length) {
    final.push(left[l]);
    l++;
  }
  while (r<right.length) {
    final.push(right[r]);
    r++;
  }
return final;
}


const array = [9, 10, 11, 1375, 465, 25];

console.log(mergesort(array));
