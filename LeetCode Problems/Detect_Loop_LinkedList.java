
class Node{
    int val;
    Node next;
     
    Node(int val) { 
        this.val = val;
    }
   
}

public class Detect_Loop_LinkedList {

    public boolean hasCycle(Node head) {
        
        Node fast = head;
        Node slow = head;

        while (fast!=null && fast.next != null){

            fast = fast.next.next;
            slow = slow.next;
            if(slow==fast){
                return true;
            }
        }
        return false;
    }
}
    
