var transparentSingleton = (function(){
	var instance;
	var transparentSingleton = function(name){
		if(!instance){
			this.name = name;
			instance = this;
		}else{
			return instance;
		}
	}
	transparentSingleton.prototype.getName = function(){
		return this.name;
	}
	return transparentSingleton;
})();
console.log(typeof transparentSingleton);
var a = new transparentSingleton("la");
var b = new transparentSingleton("ha");
console.log(a.getName()); //la
console.log(b.getName()); //la
console.log(a === b);     //true
console.log(a);     //transparentSingleton { name: 'la' }