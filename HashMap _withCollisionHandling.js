class HashTable {
    constructor(size = 100) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (const pair of this.table[index]) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return undefined;
    }
}

// Example usage
const hashMap = new HashTable();
hashMap.insert("name", "John");
console.log(hashMap.get("name")); // Output: "John"
