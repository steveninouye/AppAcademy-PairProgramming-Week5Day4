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
        j++
      }
      i++
    }
  }
  return arr;
};