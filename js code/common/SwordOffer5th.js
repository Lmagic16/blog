function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
	var node = head;
	var res = [];
	while(node !== null){
		res.unshift(node.val);
		node = node.next; 
	}
	return res;
}