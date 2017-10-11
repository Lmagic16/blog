//单例模式
function Singleton(name){
	this.name = name;
}
Singleton.prototype.getName = function(){
	return this.name;
}
Singleton.getInstance = function(name){
	if(!this.instance){
		this.instance = new Singleton(name); // 由于函数也是对象，这里的this指向Singleton对象
	}
	return this.instance;
}
var a = Singleton.getInstance("la");
var b = Singleton.getInstance("ha");
console.log(a.getName()); //la
console.log(b.getName()); //la
console.log(a === b);     //true
console.log(Singleton.instance);  // Singleton { name: 'la' }
//所以当函数1.函数2()形式调用时，this指向函数1