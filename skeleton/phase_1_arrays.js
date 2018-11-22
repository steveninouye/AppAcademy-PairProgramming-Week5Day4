Array.prototype.uniq = function() {
  let arr = [];
  this.forEach((el) => {
    if(!arr.includes(el)){
      arr.push(el);
    }
  })
  return arr;
}

Array.prototype.twoSum = function() {
  let pos = [];
  this.forEach((el1, idx1) => {
    this.forEach((el2, idx2) => {
      if (idx1 < idx2) {
        if (el1 + el2 === 0) {
          pos.push([idx1, idx2]);
        }
      }
    })
  })
  return pos;  
}

Array.prototype.transpose = function() {
  let result = [];
  
  this.forEach((el1, idx1) => {
    el1.forEach((el2, idx2) => {
      if (idx1 === 0) {
        result.push([]);
      }
      result[idx2].push(el2);
    })
  })
  return result;
}
