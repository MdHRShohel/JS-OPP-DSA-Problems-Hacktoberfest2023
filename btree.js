class TreeNode {
    constructor(leaf = true) {
      this.keys = [];
      this.children = [];
      this.leaf = leaf;
    }
  
    insert(key) {
      if (this.leaf) {
        this.insertInLeaf(key);
      } else {
        const childIndex = this.findChildIndex(key);
        this.children[childIndex].insert(key);
        if (this.children[childIndex].isFull()) {
          this.splitChild(childIndex);
        }
      }
    }
  
    insertInLeaf(key) {
      let i = 0;
      while (i < this.keys.length && key > this.keys[i]) {
        i++;
      }
      this.keys.splice(i, 0, key);
    }
  
    findChildIndex(key) {
      let i = 0;
      while (i < this.keys.length && key > this.keys[i]) {
        i++;
      }
      return i;
    }
  
    isFull() {
      return this.keys.length >= 3;
    }
  
    splitChild(childIndex) {
      const newChild = new TreeNode(this.children[childIndex].leaf);
      const childToSplit = this.children[childIndex];
      this.keys.splice(childIndex, 0, childToSplit.keys[1]);
      this.children.splice(childIndex + 1, 0, newChild);
      newChild.keys = childToSplit.keys.splice(2);
      this.children[childIndex].keys = childToSplit.keys.splice(0, 1);
    }
  
    search(key) {
      let i = 0;
      while (i < this.keys.length && key > this.keys[i]) {
        i++;
      }
  
      if (this.keys[i] === key) {
        return true;
      } else if (this.leaf) {
        return false;
      } else {
        return this.children[i].search(key);
      }
    }
  }
  
  class BTree {
    constructor() {
      this.root = new TreeNode();
    }
  
    insert(key) {
      this.root.insert(key);
      if (this.root.isFull()) {
        const newRoot = new TreeNode(false);
        newRoot.children.push(this.root);
        newRoot.splitChild(0);
        this.root = newRoot;
      }
    }
  
    search(key) {
      return this.root.search(key);
    }
  }
  
  // Example usage:
  const bTree = new BTree();
  bTree.insert(10);
  bTree.insert(20);
  bTree.insert(5);
  bTree.insert(30);
  
  console.log(bTree.search(10)); // true
  console.log(bTree.search(15)); // false
  console.log(bTree.search(30)); // true  