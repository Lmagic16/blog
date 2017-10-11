function test(){
	console.log(Object.keys(arguments));
	console.log(typeof arguments);
}
/*var a = [1,2,3,"lala",5];
console.log(Object.keys(a));
console.log(test(1,2,3,"lala",5));
console.log(a.join("-"));*/

var b = {'0':'a', '1':'b', '2':'c', length:3};  // An array-like object
//console.log(Array.prototype.join.call(b, '+'));
console.log(Array.prototype.slice.call(b)); 

var obj = {
	age:18,
};
console.log(Array.prototype.push.call(obj,"hello"),obj);
console.log(Array.prototype.pop.call(obj),obj);
console.log(Array.prototype.unshift.call(obj,"world","lala"),obj);
console.log(Array.prototype.shift.call(obj),obj);
console.log(Array.prototype.slice.call(obj),obj);
console.log(Array.prototype.splice.call(obj,0,1),obj);