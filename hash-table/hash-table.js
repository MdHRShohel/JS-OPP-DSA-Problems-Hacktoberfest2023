class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  _display() {
    const data = [];

    for (const element of this.data) {
      if (element) {
        data.push(element[0]);
      }
    }

    return data;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    if (!key) {
      return this._display();
    }

    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // if collision will become O(n) otherwise 0(1)

    return undefined;
  }

  keys() {
    const keysArray = [];

    for (const element of this.data) {
      if (element) {
        keysArray.push(element[0][0]);
      }
    }

    return keysArray;
  }
}

const hashTable = new HashTable(50);
hashTable.set('username', 'usman ghani');
hashTable.set('password', 'Abcd@1234');


