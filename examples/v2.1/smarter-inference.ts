// For this example, you need TC 2.1 (@next)
// `npm i --save-dev typescript@rc`
// It yields 2.1.1 as of today
// Change setting in VSCode: https://code.visualstudio.com/docs/languages/typescript#_using-newer-typescript-versions
// Verify TS version in VSCode statusbar

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
count.length;

// Compiler error
// count++;