Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (cb) {
  const b = [];
  // for (var i = 0; i < this.length; i++) {
  //   b.push(cb(this[i]));
  // }
  // this.myEach(function(el) {
  //   b.push(cb(el));
  // });
  
  this.myEach(el => b.push(cb(el)));
  
  return b;
};

Array.prototype.myReduce = function (cb, acc) {
  this.myEach(function(el) {
    acc = cb(acc, el);
  });
  return acc; 
};

// this.myEach(el => acc = cb(acc,el));