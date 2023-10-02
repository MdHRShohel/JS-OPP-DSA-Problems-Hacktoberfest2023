class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function hasCycle(head) {
    let tortoise = head;
    let hare = head;
  
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;
  
      if (tortoise === hare) { //if cycle is detected
        return true;
      }
    }
    // No cycle found
    return false;
  }
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2; // for creating a cycle/loop
  
  const hasCycleResult = hasCycle(node1);
  console.log(hasCycleResult); // Output: true