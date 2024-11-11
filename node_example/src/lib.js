function add(x,y) {
    return x + y;
}
// private to module
function multiply(x,y) {
    return x * y;
}

// CommonJS module
module.exports = {
    add
}