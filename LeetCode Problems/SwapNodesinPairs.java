class Solution {
    public ListNode swapPairs(ListNode head) {
        
        ListNode dummyHead = new ListNode(0);
        ListNode currentNode = dummyHead;

        dummyHead.next = head;

        while(currentNode.next!=null && currentNode.next.next!=null){
            ListNode firstNode = currentNode.next;
            ListNode secondNode = currentNode.next.next;

            ListNode tempNode = secondNode.next;
            secondNode.next = firstNode;
            firstNode.next = tempNode;
            currentNode.next = secondNode;

            currentNode = currentNode.next.next;
        }

        return dummyHead.next;

    }
}
