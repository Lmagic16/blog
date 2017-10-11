//栈，方法包括入栈操作、出栈操作、返回栈顶元素、判断栈是否为空、清空栈、栈的长度
function Stack(){
	var items = [];
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