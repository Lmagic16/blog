//透明的单例模式
var CreateSingleton = (function(){
	var instance;
	var CreateSingleton = function(name){
		if(instance){
			return instance;
		}
		this.name = name;
		this.init();
		return instance = this;
	};
	CreateSingleton.prototype.init = function(){
		console.log("do logic thing");
	}
	return CreateSingleton;
})();
var a = new CreateSingleton("lala");
var b = new CreateSingleton("haha");
console.log(a.name,b.name);
console.log(a === b);
console.log(a);