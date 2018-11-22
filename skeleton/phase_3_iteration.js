Array.prototype.bubbleSort = function() {
  let arr = this.slice();
  let sorted = false;
  while(!sorted) {
    let i = 0;
    let j = 0;
    while(i < arr.length - 1) {
      j = i + 1;
      sorted = true;
      while(j < arr.length) {
        if (arr[i] > arr[j]) {
          let val = arr[i];
          arr[i] = arr[j];
          arr[j] = val;
          sorted = false;
        }
        j++;
      }
      i++;
    }
  }
  return arr;
};

String.prototype.substrings = function() {
  let result = [];
  this.split("").forEach((el1, idx1) => {
    let currentel = el1;
    result.push(el1);
    this.split("").forEach((el2, idx2) => {
      if(idx2 > idx1) {
        currentel += el2;
        result.push(currentel);
      }
    });
  });
  return result;
};









