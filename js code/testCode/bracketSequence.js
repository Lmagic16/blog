var line = readline();
var arr = [];
var res = 0;
bracketSequence(line);
print(res);
function bracketSequence(str) {
    var arr = str.split('');
    if(arr.length === 0) {
        res++;
        return;
    }
    if(!isValid(arr.join(''))) return;
    arr.shift();
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === ')') {
            arr.splice(i, 1);
            bracketSequence(arr.join(''));
            arr.splice(i, 0, ')');
        }
    }
    arr.splice(0, 0, '(');
}
function isValid(str) {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            arr.push(str[i]);
        }else {
            if(arr.length === 0) {
                return false;
            }else {
                arr.pop();
            }
        }
    }
    if(arr.length !== 0) {
        while(arr.length !== 0) arr.pop();
        return false;
    }
    return true;
}


/*function add(items) {
    var tbody = document.getElementsByTagName("tbody")[0];
    var tdElement = "<td>"+items.name+"</td><td>"+items.price.toFixed(2)+"</td><td><a href='javascript:void(0);'>删除</a></td>";
    var trElement = document.createElement("tr");
    trElement.innerHTML = tdElement;
    tbody.appendChild(trElement);
    princeAll();
}
function princeAll(){
    var alltr = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var total = 0;
    for(var i=0;i<alltr.length;i++){
        if(alltr[i]){
            total += parseInt(alltr[i].getElementsByTagName("td")[1].innerHTML);
        }
    }
    var text = total.toFixed(2) +"("+alltr.length+"件商品)"
    document.getElementsByTagName("tfoot")[0].getElementsByTagName("td")[0].innerHTML = text;
}

function bind() {
    var tbody = document.getElementsByTagName("tbody")[0];
    var linkElement = document.getElementsByTagName("a");
    Array.prototype.forEach.call(linkElement,function(ele){
        ele.onclick = function(event){
            tbody.removeChild(event.target.parentNode.parentNode);
            princeAll();
        }
    });
}
add({name:"hao",price:18});
bind();*/