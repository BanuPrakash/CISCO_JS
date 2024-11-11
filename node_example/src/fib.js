function fibanocci(no) {
    if (no <= 1) {
        return no;
    }
    return fibanocci(no - 1) + fibanocci(no - 2);
}

console.time("first");
console.log(fibanocci(34));
console.timeEnd("first");

console.time("second");
console.log(fibanocci(34)); // should have been cached
console.timeEnd("second");
