export class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.initialCapacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.array = Array(this.initialCapacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.array.length;
    }

    set(key, value) {
        const index = this.hash(key);
        let bucket = this.array[index];
        if (!bucket) {
            bucket = [];
            this.array[index] = bucket;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.array[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    console.log(bucket[i][1]);
                    return;
                }
            }
            console.log('Key not found in hash map');
        } else {
            console.log('Key not found in hash map');
        }
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.array[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return true
                } 
            }
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.array[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    length() {
        let count = 0;
        for (let i = 0; i < this.array.length; i++) {
            const bucket = this.array[i];
            if (bucket) {
                count += bucket.length;
            }
        }
        console.log(count);
        return count;
    }

    clear() {
        for (let i = 0; i < this.array.length; i++) {
            const bucket = this.array[i];
            if (bucket) {
                bucket.length = 0;
            }
        }
    }

    keys() {
        let keysArray = [];
        for (let i = 0; i < this.array.length; i++) {
            const bucket = this.array[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    keysArray.push(bucket[j][0]);
                } 
            }
        }
        console.log(keysArray);
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for (let i = 0; i < this.array.length; i++) {
            const bucket = this.array[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    valuesArray.push(bucket[j][1]);
                }
            }
        }
        console.log(valuesArray);
        return valuesArray;
    }

    entries() {
        let entriesArry = [];
        for (let i = 0; i < this.array.length; i++) {
            const bucket = this.array[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    entriesArry.push([bucket[j][0], bucket[j][1]])
                }
            }
        }
        console.log(entriesArry);
        return entriesArry;
    }
}

