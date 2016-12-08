// New generic types
function demoReadOnly(notification: Readonly<Notification>) {
    // Compile-time immutability check
    // Weaker than immutable.js but also less obstrusive

    // Compiler error
    // notification.message = "changed";
}

function demoPartial() {
    // Compiler error, missing properties
    // const notification: Notification = {};

    let partialNotification: Partial<Notification>;
    partialNotification = {};
    partialNotification = { name: "any" };
    partialNotification = { name: "any", message: "any" };

    // Compiler error    
    // partialNotification = { typo: 3 };

    // Now we need new versions of typings that take advantage of this
}

function demoPick() {
    // These are literal types, no instances
    let pickNotification: Pick<Notification, "message" | "name">;

    // Now variable only accepts these properties, with their original types
    pickNotification = { name: "any", message: "any" };

    // Compiler error
    // pickNotification.type

    function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
        throw new Error("Not implemented");
    }

    const picked = pick(notification, "message", "name");
}

interface Person {
    name: string;
    age: number;
    city: string;
    zip: string;
}

function demoRecord() {
    const validationErrors: Record<keyof Person, Error[]> = {
        name: [],
        age: [new Error("must be a number")],
        city: [new Error("unknown")],
        zip: [new Error("must be numeric"), new Error("must be exactly 5 length"), new Error("contains leading spaces")]
    };

    const person = {} as Person;
    let count = 0;
    // for-in doesn't constrain the type of the iteration variable
    for (let propertyName in person) {
        count += validationErrors[propertyName as keyof Person].length;
    }
}

// These 4 new generic types are built upon the new mapped types:
// https://github.com/Microsoft/TypeScript/blob/fb23e6dba1e79c2c13f116299756062ee36cbf09/lib/lib.d.ts#L1366-L1392
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
// This uses 3 new concepts:
// 1. keyof
// 2. indexed access types T[P]
// 3. mapped types P in K (K is constrained keys in a string type)

// We will see these used in many library typings soon, so TS will be able to detect more wrong usages

// I'm curious about how this transition will happen. Breaking changes in typings?

// Typescript is not changing the Javascript ecosystem, instead it's embracing its practices

// There was a request to support partial types, and they came back with this brilliant concept
