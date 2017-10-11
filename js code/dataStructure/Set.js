//集合，采用对象来实现集合，对象的属性存放元素值，因为对象中的属性无序，集合类的方法包括添加/删除元素，是否有某值，清除集合，集合大小
function Set(){
	var items = {};
	this.has = function(value){
		return items.hasOwnProperty(value);
	}
	//向集合中添加元素
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	}
	//删除集合中的元素
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}
	this.size = function(){
		return Object.keys(items).length;
	}
	this.clear = function(){
		items = {};
	}
	this.values = function(){
		return Object.keys(items); //返回对象自身中可枚举属性
	}

	//集合的交集，并集，差集，子集方法
	//并集
	this.union = function(setB){
		var setAvalues = this.values();
		var setUnion = new Set();
		for(var i=0;i<setAvalues.length;i++){
			setUnion.add(setAvalues[i]);
		}
		var setBvalues = setB.values();
		for(var j=0;j<setBvalues.length;j++){
			setUnion.add(setBvalues[j]);
		}
		return setUnion;
	}
	//交集
	this.intersection = function(setB){
		var setAvalues = this.values();
		var intersectionSet = new Set();
		var setBvalues = setB.values();
		for(var i=0;i<setAvalues.length;i++){
			if(setB.has(setAvalues[i])){
				intersectionSet.add(setAvalues[i]);
			}
		}
		return intersectionSet;
	}
	//差集
	this.difference = function(setB){
		var setAvalues = this.values();
		var differenceSet = new Set();
		var setBvalues = setB.values();
		for(var i=0;i<setAvalues.length;i++){
			if(!setB.has(setAvalues[i])){
				differenceSet.add(setAvalues[i]);
			}
		}
		return differenceSet;
	}
	//子集
	this.isSubsetOf = function(setB){
		var setAvalues = this.values();
		var setBvalues = setB.values();
		for(var i=0;i<setAvalues.length;i++){
			if(!setB.has(setAvalues[i])){
				return false;
			}
		}
		return true;
	}
}

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

var setB = new Set();
setB.add(5);
setB.add(7);
setB.add(3);
setB.add(4);

console.log(setA.values(),setB.values());

var setAB = setA.union(setB);
console.log("并集："+setAB.values());

var intersectionSetAB = setA.intersection(setB);
console.log("交集："+intersectionSetAB.values());

var differenceSetAB = setA.difference(setB);
var differenceSetBA = setB.difference(setA);
console.log("A-B差集："+differenceSetAB.values());
console.log("B-A差集："+differenceSetBA.values());

var setC = new Set();
setC.add(5);
setC.add(7);

var flag = setC.isSubsetOf(setB);
console.log(flag);