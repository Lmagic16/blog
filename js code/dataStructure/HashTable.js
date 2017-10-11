//散列表，
function Stack(){
	var table = [];
	this.push = function(ele){
		items.push(ele);
	};
	this.pop = function(){
		items.pop();
	};
	this.size = function(){
		return items.length;
	};
	this.clear = function(){
		items = [];
	};
	this.peek = function(){
		return items[items.length-1];
	}
	this.isEmpty = function(){
		return items.length > 0 ? false : true;
	}
}
var stack = new Stack();
console.log(stack);
stack.push(2);
console.log(stack.size());
console.log(stack.isEmpty());