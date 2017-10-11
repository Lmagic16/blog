function throttle(fn,interval){
    clearTimeout(fn.timer); // 每次触发函数执行时，先将函数的timer清除
    fn.timer = setTimeout(fn,interval);  // 这里将函数设置为延迟执行
}
// 这里将timer设置为函数的属性，可以方便访问，但好一点的做法是将timer利用闭包封装为私有变量

//函数节流的封装版本
function throttle(fn,interval){ // 这里是将timer简单封装
    var timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,interval); // 如果fn函数内有this相关代码，可能会出错，this绑定对象的出错？
    }
}
function throttle(fn,interval){ 
    var timer;
    return function(){
        var context = this, args = arguments; 
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,arguments);  // 这里考虑到函数this和参数的正确传递
        },interval);
    }
}

//固定时间间隔执行版本
function throttle(fn,interval,during){ 
    var timer,startTime = +new Date();
    return function(){
        var context = this, args = arguments,currentTime = +new Date();
        clearTimeout(timer);
        if(currentTime-startTime >= during){
            fn.apply(context,arguments);
            startTime = currentTime;
        }
        timer = setTimeout(function(){
            fn.apply(context,arguments);  // 这里考虑到函数this和参数的正确传递
        },interval);
    }
}