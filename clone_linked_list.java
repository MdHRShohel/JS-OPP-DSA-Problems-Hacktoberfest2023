// Problem Statement: Given a Linked list that has two pointers in each node and one of which points to the first node and the other points to any random node. Write a program to clone the LinkedList.

// Example 1:
// Input:
// 	head = [[1,3],[2,0],[3,null],[4,1]]
// Output:
// 	head = [[1,3],[2,0],[3,null],[4,1]]

import java.util.*;

class Node {
        int val;
        Node next;
        Node random;
        Node(int value) {
            val = value;
            next = null;
            random = null;
        }
}
class TUF{
static Node copyRandomList(Node head) {
     Node temp = head;
	//step 1
    while(temp != null) {
        Node newNode = new Node(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = temp.next.next;
    }
	//step 2
    Node itr = head;
    while(itr != null) {
        if(itr.random != null)
            itr.next.random = itr.random.next;
        itr = itr.next.next;
    }
	//step 3
    Node dummy = new Node(0);
    itr = head;
    temp = dummy;
    Node fast;
    while(itr != null) {
        fast = itr.next.next;
        temp.next = itr.next;
        itr.next = fast;
        temp = temp.next;
        itr = fast;
    }
    return dummy.next;
}

static void printList(Node head) {
    while(head != null) {
        System.out.print(head.val+":");
        if(head.next != null)
        System.out.print(head.next.val);
        else
        System.out.print("NULL");
        if(head.random != null)
        System.out.print(","+head.random.val);
        else
        System.out.print(",NULL");
        System.out.println();
        head = head.next;
    }
}

public static void main(String args[]) {
    Node head = null;
    
    Node node1 = new Node(1);
    Node node2 = new Node(2);
    Node node3 = new Node(3);
    Node node4 = new Node(4);
    
    head = node1;
    head.next = node2;
    head.next.next = node3;
    head.next.next.next = node4;
    
    head.random = node4;
    head.next.random = node1;
    head.next.next.random = null;
    head.next.next.next.random = node2;
    
    System.out.println("Original list:(current node:node pointed by next pointer,
    node pointed by random pointer)");
    printList(head);
    
    System.out.println("Copy list:(current node:node pointed by next pointer,node 
    pointed by random pointer)");
    Node newHead = copyRandomList(head);
    printList(newHead);
}
}

// Output:

// Original list:(current node: node pointed by next pointer, node pointed by random pointer)
// 1:2,4
// 2:3,1
// 3:4, NULL
// 4:NULL,2
// Copy list:(current node: node pointed by next pointer, node pointed by random pointer)
// 1:2,4
// 2:3,1
// 3:4, NULL
// 4:NULL,2
