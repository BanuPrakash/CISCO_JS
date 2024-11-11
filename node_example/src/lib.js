function add(x,y) {
    return x + y;
}
// private to module
function multiply(x,y) {
    return x * y;
}

// OCP --> Open for extension, closed for modification
function filter(elems, predicate) {
    let results = [];
    for (let i = 0; i < elems.length; i++) {
        if (predicate(elems[i])) {
            results.push(elems[i]);
        }
    }
    return results;
}

function map(elems, transformFn) {
    let results = [];
    for (let i = 0; i < elems.length; i++) {
            results.push(transformFn(elems[i]));
    }
    return results;
}

// CommonJS module
module.exports = {
    add,
    filter, 
    map
}