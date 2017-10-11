var line=readline();
print(bracketSequence(line));

function bracketSequence(line){
    if(line.length === 0) return 0;
    var stack = new Stack();
    return 24;
}
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