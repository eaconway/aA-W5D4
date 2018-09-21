Array.prototype.bubbleSort = function () {
  const b = this.slice();
  let sorted = false;
  
  while (!sorted){
    sorted = true;
    for (var i = 0; i < b.length; i++) {
      if (b[i] > b[i+1]) {
        temp = b[i];
        b[i] = b[i+1];
        b[i+1] = temp;
        sorted = false;
      }
    }
  }
  return b;
};

String.prototype.substrings = function () {
  const b = [];
  
  for (let i = 0; i < this.length-1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      b.push(this.slice(i,j+1));
    }
  }
  return b;
};
