/*var stack1 = [];
function push(node)
{
    stack1.push(node);
}
function pop()
{
    return stack1.shift();
}*/
function Stack(){
	var item = [];
	this.instack = function(node){
		item.push(node);
	}
	this.outstack = function(){
		return item.pop();
	}
	this.getstack = function(){
		return item;
	}
	this.getsize = function(){
		return item.length;
	}
}
var stack1 = new Stack();
var stack2 = new Stack();
function push(node){
    stack1.instack(node);
}
function pop(){
	if(stack2.getsize() === 0){
		var size = stack1.getsize();
		for(var i=0;i<size;i++){
			stack2.instack(stack1.outstack());
		}
	}
	if(stack2.getsize() > 0){
		console.log(stack2.outstack());
	}
}
push(1);
push(2);
push(3);
pop();
pop();
push(4);
pop();
push(5);
pop();
pop();
/*console.log(stack1.getstack(),stack2.getsize());*/