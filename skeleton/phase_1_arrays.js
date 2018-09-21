// let a = [1,2,1,1,3];

Array.prototype.myuniq = function(){
  const b = [];
  for (let i = 0; i < this.length; i++){
    if (!b.includes(this[i])) {
      b.push(this[i]);
    }
  }
  return b;
};

Array.prototype.twoSum = function(){
  const b = [];

  for (let i = 0; i < this.length-1; i++){
    for (let j = 1; j < this.length; j++){
      if (j <= i){
        continue;
      }
      if (this[i] + this[j] === 0) {
        b.push([i,j]);
      }
    }
  }
  return b;
};

Array.prototype.transpose = function() {
  const b = [];

  for (let i = 0; i < this.length; i++){
    let subArray = [];
    for (let j = 0; j < this.length; j++){
      subArray.push(this[j][i]);  
    }
    b.push(subArray);
  }
  return b;
};






// 