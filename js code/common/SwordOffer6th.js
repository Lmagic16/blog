/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
	function TreeNode(x) {
	    this.val = x;
	    this.left = null;
	    this.right = null;
	}
	if(pre.length === 0 || vin.length === 0){
		return null;
	}
    var headVal = pre[0];
    var head = new TreeNode(headVal);
    var index = vin.indexOf(headVal);
    head.left = reConstructBinaryTree(pre.slice(1,index+1),vin.slice(0,index));
    head.right = reConstructBinaryTree(pre.slice(index+1,),vin.slice(index+1));
    return head;
}
//递归需要考虑的：递归的出口，即if结束条件；递归的输入和输入每次都是相同的数据结构。
//两种遍历结果推出树结构，必须需要其中一种是中序遍历，这样，才能够将遍历结果拆分递归得到结果。