//队列，方法包括入队操作、出队操作、返回队首元素、判断队列是否为空、清空队列、队列的长度
function Queue(){
	var items = [];
	this.inqueue = function(ele){
		items.push(ele);
	};
	this.outqueue = function(){
		items.shift();
	};
	this.size = function(){
		return items.length;
	};
	this.clear = function(){
		items = [];
	};
	this.front = function(){
		return items[0];
	}
	this.isEmpty = function(){
		return items.length > 0 ? false : true;
	}
}
/*
var queue = new Queue();
console.log(queue.isEmpty());
queue.inqueue(2);
console.log(queue.size());*/


//优先级队列
function PriorityQueue(){
	var items = [];
	function QueueElement(element,priority){
		this.element = element;
		this.priority = priority;
	}
	this.inqueue = function(element,priority){
		var queueElement = new QueueElement(element,priority);
		if(this.isEmpty()){
			items.push(queueElement);
		}else{
			for(var i=0;i<items.length;i++){
				if(items[i].priority > priority){
					items.splice(i,0,queueElement);
					break;
				}else if(i === (items.length-1)){
					items.push(queueElement);
					break;  // 这里一定要break，不然会循环插入，导致堆溢出
				}
			}
		}
	};
	this.outqueue = function(){
		items.shift();
	};
	this.size = function(){
		return items.length;
	};
	this.clear = function(){
		items = [];
	};
	this.front = function(){
		return items[0].element;
	}
	this.isEmpty = function(){
		return items.length > 0 ? false : true;
	}
	this.get = function(){
		return items;
	}
}
/*var priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());
priorityQueue.inqueue("lala",3);
priorityQueue.inqueue("hsadjkfha",2);
priorityQueue.inqueue("hehe",3);
priorityQueue.inqueue("hello",1);
console.log(priorityQueue.get());*/



//循环队列
//击鼓传花游戏，以固定循环次数来模拟每轮击鼓的固定时长，该游戏会一轮一轮迭代，每轮淘汰一人，直到只剩最后一人即为胜者
function hotPotato(namelist,num){
	var queue = new Queue();
	for(var i=0;i<namelist.length;i++){
		queue.inqueue(namelist[i]);
	}
	while(queue.size() > 1){
		for(i=0;i<num;i++){
			var nowElement = queue.front();
			queue.outqueue();
			queue.inqueue(nowElement);
		}
		var deletElement = queue.front();
		queue.outqueue();
		console.log(deletElement+"在击鼓传花游戏中被淘汰");
	}
	return queue.front();
}
var list = ["hahah","askdjvzxv","uuuuu","aaaaa","bbbbbb","ccccc"];
var winner = hotPotato(list,5);
console.log("胜利者是："+winner);