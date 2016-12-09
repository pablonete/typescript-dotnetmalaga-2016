function lessImplicitAnyErrors() {
    // This won't be inferred as `any` anymore
    // So this is not an error for no-implicit-any since 2.1
    let count;

    count = 10;
    // Now count: number

    count++;
    // Correct

    count = "many";
    // Now count: string

    // So this compiles:
    console.log(count.length);

    // Compiler error
    // count++;

    // If you use explicit any, this inference won't work
    // i.e. it compiles, but no types are verified
}

function alsoForArrays() {
    const notifications = [];

    notifications.push(new Error("any"));
    // Now notifications: Notification[]
    for (let n of notifications) {
        console.log(n.message);
    }

    notifications.push({ a: 1 });
    // Now notifications: (Error | { a: number })[]

    for (let n of notifications) {
        if (n instanceof Error) {
            console.log(n.message);
        } else {
            console.log(n.a);
        }
    }
}

function typeIsFrozenWhenAssigned() {
    let x = [];
    x.push(5);

    // Here y takes current x type
    let y = x;

    x.push("hello");

    // Compiler error, because y is frozen, not evolving like x
    // y.push("hello");
}

// It doesn't work for arguments.
// Compile error
// function coerceString(value) {
//     value = value ? value.toString() : "";
//     return value;
// }

// My take on this: it's useful to ramp up existing Javascript codebase;
// and to turn on noImplicitAny flag easier (less errors);
// mutability is not very recommended for readable code;
// but it has some use cases.

function deferAssignment(a: number, b: number) {
    let hasToFetch;
    if (a === b) {
        hasToFetch = false;
    } else if (a > b) {
        console.log("do something");
        hasToFetch = b > 20;
    }

    // But there's a maybe-unintentional undefined here that an explicit type would catch in TS 2.1
    if (hasToFetch) {
        console.log("fetch");
    }
}
