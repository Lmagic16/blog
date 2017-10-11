//事件循环机制测试
console.log('golb1');
setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })

    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })

    setTimeout(function() {
    	console.log('timeout1_timeout1');
        process.nextTick(function() {
            console.log('timeout1_timeout1_nextTick');
        })
    });
})
new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})