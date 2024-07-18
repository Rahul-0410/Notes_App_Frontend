function addToLocalStorage(key, value) {
    if (typeof value === "object") {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, value);
    }
}

function getFromLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (!value) {
        return null;
    }
    
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function UpdateFromLocalStorage(key, updatedValue) {
    let value = localStorage.getItem(key);
    if (!value) {
        return null;
    }
    
    try {
        localStorage.setItem(key, updatedValue);
    } catch (error) {
        return value;
    }
}

const methods ={
    addToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
    UpdateFromLocalStorage
}

export default methods;