function fibanocci(no) {
    if (no <= 1) {
        return no;
    }
    return fibanocci(no - 1) + fibanocci(no - 2);
}

function memoize(fn) {
    let cache = {};
    return function (no) {
        if (cache[no] === undefined) {
            cache[no] = fn(no);
        }
        return cache[no];
    }
}

let memFib = memoize(fibanocci);

console.time("first");
console.log(memFib(34));
console.timeEnd("first");

console.time("second");
console.log(memFib(34)); // get from cache  
console.timeEnd("second");
