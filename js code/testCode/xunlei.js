console.log("数组去重");
Array.prototype.unique = function(){
    //TODO：编写代码逻辑
    //返回结果return newArr;
    var tem = {};
    var tem2 = {};
    var newArr = [];
    for(var i=0,j=0;i<this.length;i++){
      if(typeof(this[i]) == "string"){//如果数组元素是string类型
        if(!tem2[this[i]]){
            newArr[newArr.length] = this[i];
            tem2[this[i]] = 1;
        }
      } 
       
      else{
      if(!tem[this[i]]){
            newArr[newArr.length] = this[i];
            tem[this[i]] = 1;
        }
      }
    }
    return newArr;
};


// 数组去重
const arr = [0,0,0,0,1,1,'11','1',22,2,0,0,8,8,2,2,1,1,3,3,3,3,3]
const unique1 = [...new Set(arr)];
const unique2 = arr.filter((item, index, array) => array.indexOf(item) === index);
console.log(unique1, unique1);



var arr = [0,0,0,0,1,1,'11','1',22,2,0,0,8,8,2,2,1,1,3,3,3,3,3];
console.log(arr.unique());
console.log("第二道");
var validParentheses = function (parens) {
  var arr = [];
  var size = {
    // (){}[]<>
    '(' : 1,
    '{' : 2,
    '[' : 3,
    '<' : 4,
    ')' : 5,
    '}' : 6,
    ']' : 7,
    '>' : 8,
  }
  if(parens.length <= 1){return false;}
   
  for(var i=0;i<parens.length;i++){
      if(size[parens[i]] <= 4){
          arr.push(parens[i]);
      }
      else{
          var a = arr.pop();
          if(size[a] != (size[parens[i]]-4)){return false;}
      }
  }
  if(arr.length){return false;}
  return true;
}
console.log(validParentheses('(){}<'));