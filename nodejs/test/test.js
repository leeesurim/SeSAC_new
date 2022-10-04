class MyCache {
    constructor() {
        this.cache = {};
    }

    add(key, obj) {
        this.cache[key] = new WeakRef(obj);
    }

    get(key) {
        let cacheRef = this.cache[key].deref();
        if(cachedRef){
            return cachedRef;
        } else {
            return false;
        }
    }
}

