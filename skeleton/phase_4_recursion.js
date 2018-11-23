function range(start, end) {
  if(end < start){
    return [];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  el = arr.shift();
  return el + sumRec(arr);
}

function exponent(base, exp) {
  if(exp === 1) {
    return base;
  }
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if(exp === 1) {
    return base;
  } else if(exp === 0) {
    return 1;
  }
  if(exp % 2 === 1) {
    return base * exponent2(base, exp - 1);
  } else {
    return base * base * exponent2(base, exp - 2);
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  }
  let prev1 = fibonacci(n-1);
  let prev2 = fibonacci(n-2).slice(-1)[0];
  return prev1.concat([prev1.slice(-1)[0] + prev2]);
}

function deepDup(arr) {
  if (!(arr instanceof Array)){
    return arr;
  }
  return arr.map((el) => deepDup(el) );
}

function bsearch(arr, target) {
  console.log(arr);
  if (arr.length === 0 || (arr.length == 1 && target !== arr[0])) {
    return -1;
  }
  let middle = Math.floor(arr.length / 2);
  let el = arr[middle];
  if (el === target) {
    return middle;
  } else if (el < target) {
    let result = bsearch(arr.slice(middle), target);
    if (result === -1) {
      return -1;
    } else {
      return middle + result;
    }
  } else {
    return bsearch(arr.slice(0, middle), target);
  }
}

function mergesort(arr) {
  if(arr.length <= 1){
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0,middle));
  let right = mergesort(arr.slice(middle));
  return merge(left, right);
}

function merge(leftArr, rightArr){
  let result = [];
  while (!(leftArr.length === 0) && !(rightArr.length === 0)) {
    if(leftArr[0] < rightArr[0]){
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }
  return result.concat(leftArr).concat(rightArr);
}






///