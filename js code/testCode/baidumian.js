var p1 = Promise.resolve();
var p2 = p1.then();
console.log(p1 == p2);