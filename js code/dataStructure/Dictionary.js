//字典，采用对象来实现字典，以key-value的形式存储，因为对象中的属性无序，字典的方法包括通过key来添加/删除元素，是否有某值，清除字典，字典大小
function Dictionary(){
	var items = {};
	this.has = function(key){
		return items.hasOwnProperty(key);
	}
	//向字典中添加元素
	this.set = function(key,value){
		if(!this.has(key)){
			items[key] = value;
			return true;
		}
		return false;
	}
	//删除字典中的元素
	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}
	//获取固定的值
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}
	this.size = function(){
		return Object.keys(items).length;
	}
	this.clear = function(){
		items = {};
	}
	this.keys = function(){
		return Object.keys(items); //返回对象自身中可枚举属性
	}
	this.values = function(){
		var res = [];
		for(key in items){
			if(items.hasOwnProperty(key)){
				res.push(items[key]);
			}
		}
		return res;
	}
	//获取整个字典对象
	this.getItems = function(){
		return items; 
	}

}

var dictionary = new Dictionary();
dictionary.set(1,"hahah");
dictionary.set(2,"lalal");
dictionary.set(3,"yes");
dictionary.set(4,"yeah");

dictionary.remove(4);
console.log(dictionary.keys(),dictionary.values(),dictionary.get(1),dictionary.getItems());