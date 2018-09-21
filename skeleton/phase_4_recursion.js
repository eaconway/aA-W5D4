Array.prototype.range = function (start, end) {
  // debugger
  if (start === end) {
    return [this[start]];
  }  
  let result = [this[start]];
  return result.concat(this.range(start + 1, end));
}; 

// Array.prototype.sumRec = function () {
//   if (this.length === 1) {
//     return this[0];
//   }
//   return this[0] + this.slice(1).sumRec();
// };

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

function expo (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * expo(base, exp-1);
}

function expo2 (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return expo2(base, exp / 2)**2;
  } else {
    return expo2(base, (exp-1) / 2)**2;
  }
}

function fibs(n) {
  if (n === 0 || n === 1) {
    return [n] 
  } 
  if (n == 2) {
    return [1,1];
  }
  return fibs(n-1).concat([fibs(n - 1).pop() + fibs(n - 2).pop()])
}

function deepDup(arr) {
  const result_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result_arr.push(deepDup(arr[i]));
    } else {
      result_arr.push(arr[i]);
    }
  }
  return result_arr;
}

function bsearch(arr,target) {
  if (arr.length === 0) {
    return -1;
  } 
  
  const mid = Math.floor(arr.length/2)
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0,mid),target);
  } else {
    const o = bsearch(arr.slice(mid+1, arr.length), target)
    if (o === -1) {
      return o;
    }
    return o + mid  +1 
  }
}

function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr
  }
  
  const mid = Math.floor(arr.length / 2);
  
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)
  
  const sorted_left = mergeSort(left)
  const sorted_right = mergeSort(right)
  
  return merged(sorted_left, sorted_right); 
}

function merged(left_arr, right_arr) {
  const result = [];
  
  while (left_arr.length != 0 && right_arr.length != 0){
    (left_arr[0] <= right_arr[0] ? result.push(left_arr.shift()) : result.push(right_arr.shift()));
  }
  
  return result.concat(left_arr, right_arr);
}

function subsets(arr) {
  //  base
  if (arr.length === 0) {
    return [];
  }
  const subs = subsets(arr.slice(1))
  
  const result = subs.myMap(function(el) {
    return arr[0].concat(el)  
  })
  
  return subs.concat(result);
}




// 

