//链表，元素在内存中非连续放置，方法包括链表尾部加入/删除元素，链表指定位置加入/删除元素，找出元素在链表中的索引，链表是否为空，链表的长度
function LinkedList(){
	var head = null;//链表第一个元素的引用
	var length = 0;//链表的长度，不然寻求size很麻烦
	var end = null;//链表最后一个元素的引用，方便插入/删除元素
	function Node(element){
		this.element = element;
		this.next = null;
	}
	//从链表尾部加入node元素
	this.appendList = function(element){
		var node = new Node(element);
		if(head === null){
			head = node;
		}else{
			end.next = node;
		}
		end = node;
		length++;
	};
	//从链表指定位置加入node元素,0表示在链表头插入该元素
	this.appendListAt = function(position,element){
		var node = new Node(element);
		if(position > 0){
			var frontNode = this.findNodeAt(position);
			var afterNode = frontNode.next;
			frontNode.next = node;
			node.next = afterNode;
			length++;
		}else if(position === 0){
			node.next = head;
			head = node;
			length++;
		}
	};
	//从链表尾部删除node元素
	this.removeList = function(){
		if(head !== null){
			var findNode = this.findNodeAt(length-1);
			end = findNode;
			findNode.next = null;
			length--;
		}
	};
	//从链表指定位置删除node元素
	this.removeListAt = function(position){
		if(position > 1){ //永远检测用户输入
			var frontNode = this.findNodeAt(position-1);
			var afterNode = frontNode.next.next;
			frontNode.next = afterNode;
			length--;
		}else if(position = 1){
			head = head.next;
			length--;
		}
	};
	//链表的大小
	this.size = function(){
		return length;
	};
	this.isEmpty = function(){
		return head == null ? true : false;
	}
	this.toString = function(){
		var iterNode = head;
		var outString = [];
		outString.push(head.element);
		for(var i=1;i<length;i++){
			iterNode = iterNode.next;
			outString.push(iterNode.element);
		}
		return outString;
	}
	//封装一个可共用的函数，找出指定位置的node元素
	this.findNodeAt = function(position){
		var iterNode = head;
		while(position > 1){
			iterNode = iterNode.next;
			position--;
		}
		return iterNode;
	}
}
var linkedlist = new LinkedList();
linkedlist.appendList("haha");
linkedlist.appendList("yes");
linkedlist.appendList("ok");
console.log(linkedlist.size(),linkedlist.toString());
linkedlist.removeList();
console.log(linkedlist.size(),linkedlist.toString());
linkedlist.appendListAt(0,"thelast");
console.log(linkedlist.size(),linkedlist.toString());
linkedlist.removeListAt(1);
console.log(linkedlist.size(),linkedlist.toString());