class Bitset {
    constructor(size) {
        this.size = size;
        this.bits = Array(Math.ceil(size / 32)).fill(0);
    }

    set(bit) {
        const index = Math.floor(bit / 32);
        const shift = bit % 32;
        this.bits[index] |= (1 << shift);
    }

    reset(bit) {
        const index = Math.floor(bit / 32);
        const shift = bit % 32;
        this.bits[index] &= ~(1 << shift);
    }

    test(bit) {
        const index = Math.floor(bit / 32);
        const shift = bit % 32;
        return (this.bits[index] & (1 << shift)) !== 0;
    }
}

// Example Usage
const bitset = new Bitset(100);

bitset.set(5);
bitset.set(10);
bitset.set(15);

console.log(bitset.test(5));  // Output: true
console.log(bitset.test(7));  // Output: false

bitset.reset(10);

console.log(bitset.test(10)); // Output: false
