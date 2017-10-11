//发布-订阅者模式
/*var publishSubscribe = new Object();
publishSubscribe.eventList = []; //缓存列表，存放订阅者的回调函数
publishSubscribe.subscribe = function(fn){ //添加订阅者
	this.eventList.push(fn);
}
publishSubscribe.publisher = function(){   //发布消息
	for(var i=0;i<this.eventList.length;i++){
		var fn = this.eventList[i];
		fn.apply(this,arguments);  // arguments是发布消息时带上的参数
	}
}
publishSubscribe.subscribe(function(a,b){ //1号订阅者
	console.log(a+b);
})
publishSubscribe.subscribe(function(){  //2号订阅者
	console.log("3");
})
publishSubscribe.subscribe(function(){  //3号订阅者
	console.log("4");
})
publishSubscribe.publisher("hello","world");*/


// 发布-订阅功能封装+分类订阅
var event = {  //将发布-订阅的功能封装
	eventList:{}, //分类缓存列表，存放订阅者的回调函数，以key来分类
	subscribe: function(key,fn){ //添加订阅者
		if(!this.eventList[key]){  // 若没有这个分类则创建一个该分类
			this.eventList[key] = [];
		}
		this.eventList[key].push(fn);
	},
	publisher:function(key){   //发布消息
		for(var i=0;i<this.eventList[key].length;i++){
			var fn = this.eventList[key][i];
			fn.apply(this,arguments);  // arguments是发布消息时带上的参数，也是发布者与订阅者传递消息的方式
		}
	},
	removeKey:function(key){  //发布者可清空某个key分类的订阅者
		this.eventList[key] = [];
	}
}
function installEvent(obj){ //将发布-订阅的功能添加到obj对象
	for(var i in event){
		obj[i] = event[i];
	}
}
var publishSubscribe = {};
installEvent(publishSubscribe);  

publishSubscribe.subscribe("class1",function(a,b){ //1号订阅者1类
	console.log(a+b);
})
publishSubscribe.subscribe("class1",function(){  //2号订阅者1类
	console.log("3");
})
publishSubscribe.subscribe("class2",function(){  //3号订阅者2类
	console.log("4");
})
publishSubscribe.publisher("class1","您收到1类消息");  
/*publishSubscribe.publisher("class2","您收到2类消息");*/
publishSubscribe.removeKey("class1");