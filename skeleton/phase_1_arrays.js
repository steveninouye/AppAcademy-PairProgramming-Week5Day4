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
          pos.push([idx1, idx2])
        }
      }
    })
  })
  return pos;  
}

