//二叉搜索树
function BinarySearchTree(){
	var rootNode = null;
	function TreeNode(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}
	//向树中插入新节点
	this.insert = function(key){
		var treeNode = new TreeNode(key);
		if(rootNode === null){
			rootNode = treeNode;
		}else{
			insertNode(rootNode,treeNode);
		}
	}
	function insertNode(node,treeNode){
		if(treeNode.key < node.key){
			if(node.left === null){
				node.left = treeNode;
			}else{
				insertNode(node.left,treeNode);
			}
		}else if(treeNode.key > node.key){
			if(node.right === null){
				node.right = treeNode;
			}else{
				insertNode(node.right,treeNode);
			}
		}
	}
	//先序遍历
	this.preOrderTraverse = function(){
		if(rootNode === null){
			console.log("没有节点");
		}else{
			pretraverse(rootNode);
		}
	}
	function pretraverse(node){
		if(node !== null){
			pretraverse(node.left);
			console.log(node.key);
			pretraverse(node.right);
		}
	}
	//中序遍历
	this.inOrderTraverse = function(){
		if(rootNode === null){
			console.log("没有节点");
		}else{
			intraverse(rootNode);
		}
	}
	function intraverse(node){
		if(node !== null){
			console.log(node.key);
			intraverse(node.left);
			intraverse(node.right);
		}
	}
	//后序遍历
	this.posOrderTraverse = function(){
		if(rootNode === null){
			console.log("没有节点");
		}else{
			postraverse(rootNode);
		}
	}
	function postraverse(node){
		if(node !== null){
			postraverse(node.left);
			postraverse(node.right);
			console.log(node.key);
		}
	}
	//移除树中的节点
	this.remove = function(key){
		rootNode = removeNode(rootNode,key);
	}
	function removeNode(node,key){
		if(node === null){
			return null;
		}
		if(key < node.key){
			node.left = removeNode(node.left,key);
			return node; //与下面三个return node的功能都是保证removeNode的返回值为删除节点后树的根节点
		}else if(key > node.key){
			node.right = removeNode(node.right,key);
			return node;
		}else{
			if(node !== null){ //考虑到被删除节点的三种情况
				if((node.left === null) && (node.right === null)){
					node = null;//这里只是为了垃圾回收node，下面作用都类似
					return node;//这里才是删除的功能，这里的返回是为了让node.left = removeNode(node.left,key);中node.left=null;
				}else if((node.left === null) && (node.right !== null)){
					var temp = node.right;
					node = null;
					return temp;
				}else if((node.left !== null) && (node.right === null)){
					var temp = node.left;
					node = null;
					return temp;
				}else if((node.left !== null) && (node.right !== null)){
					var findNode = findMin(node.right);
					node.key = findNode.key;
					node.right = removeNode(node.right,findNode.key);
					return node;
				}
			}
		}
		/*
		//出现的问题：拿到节点对象的引用，并不能对节点本身进行删除
		while((node !== null) && (node.key !== key)){
			if(key < node.key){
				node = node.left;
			}else if(key > node.key){
				node = node.right;
			}
		}
		if(node !== null){ //考虑到被删除节点的三种情况
			console.log(node.key);
			if((node.left === null) && (node.right === null)){
				console.log("ok");
				node = null;
			}else if((node.left === null) || (node.right !== null)){
				node = node.right;
			}else if((node.left !== null) || (node.right === null)){
				node = node.left;
			}else if((node.left !== null) || (node.right !== null)){
				var findNode = findMixKey(node.right);
				node.key = findNode.key;
				removeNode(findNode,findNode.key);
			}
		}*/
	}
	function findMin(node){
		while(node.left !== null){
			node = node.left;
		}
		return node;
	}
	//查找某个节点
	this.search = function(key){
		var node = rootNode;
		while((node !== null) && (node.key !== key)){
			if(key < node.key){
				node = node.left;
			}else if(key > node.key){
				node = node.right;
			}
		}
		return (node !== null) ? true : false;
	}
	//获取树中最小值
	this.min = function(){
		var node = rootNode;
		while(node.left !== null){
			node = node.left;
		}
		return node.key;
	}
	//获取树中最大值
	this.max = function(){
		var node = rootNode;
		while(node.right !== null){
			node = node.right;
		}
		return node.key;
	}
	this.getRootNodeKey = function(){
		return rootNode.key;
	}
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(8);
binarySearchTree.insert(7);
binarySearchTree.insert(11);
binarySearchTree.insert(9);
binarySearchTree.insert(2);
binarySearchTree.insert(5);
binarySearchTree.insert(16);
binarySearchTree.insert(13);
binarySearchTree.insert(20);
//binarySearchTree.preOrderTraverse();//先序
//binarySearchTree.inOrderTraverse();//中序
//binarySearchTree.posOrderTraverse();//后序
console.log(binarySearchTree.min(),binarySearchTree.max(),binarySearchTree.search(2));
binarySearchTree.remove(11);
binarySearchTree.preOrderTraverse();