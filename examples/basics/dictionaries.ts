// Generics: Not much new from what you'd expect coming from C# or Java

// Javascript objects are already dictionaries.
interface DictionaryStringTo<T> {
    [key: string]: T;
}

interface DictionaryNumberTo<T> {
    [key: number]: T;
}

// Don't rely too much on type inference.
// It's powerful, but on an error you'll need to track down more.
const resultsMap = {
// const map: DictionaryStringTo<Notification> = {
  "bad": { name: "Fail", message: "Wrong", type: NotificationType.failure },
  "good": { name: "Saved", messsage: "Succeed", type: NotificationType.info },
}

console.log(resultsMap["good"]);

// More advanced usages with Map (like objects as keys)
// but you need to target ES6 and perhaps provide a polyfill
const first = {};
const second = {};

const twoMap = new Map<{}, Notification>([
  [first, { name: "Fail", message: "Wrong", type: NotificationType.failure }],
  [second, { name: "Saved", message: "Succeed", type: NotificationType.info }],
]);

