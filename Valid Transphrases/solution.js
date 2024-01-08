function isValid(a) {
    const stack = [];
    const params = "[] {} ()";

    let i = 0;

    while(i < a.length) {
        stack.push(a[i]);
        i++;

        let open = stack[params.length - 2];
        let close = stack[params.length - 1];

        let perParams = open + close;

        if(params.includes(perParams)) {
            stack.pop();
        }
    }

    return stack.length === 0;
}

// console.log(isValid({})); // true
// console.log(isValid([])); // true
// console.log(isValid(())); // true // but vs code erorr