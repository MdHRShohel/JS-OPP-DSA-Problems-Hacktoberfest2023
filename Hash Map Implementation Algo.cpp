class HashMap {
    constructor() {
        this.map = {};
    }

    set(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    delete(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
            return true;
        }
        return false;
    }

    has(key) {
        return this.map.hasOwnProperty(key);
    }

    keys() {
        return Object.keys(this.map);
    }

    values() {
        return Object.values(this.map);
    }
}
