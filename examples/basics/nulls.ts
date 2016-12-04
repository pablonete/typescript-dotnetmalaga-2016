// Enable --strictNullChecks for this example

function increment(value: number): number {
  return value + 1;
}

console.log(increment(1));
// Compiler errors:
// console.log(increment(null));
// console.log(increment(undefined));

function incrementOptional(value?: number): number {
  return value + 1;
}

console.log(incrementOptional(1));
console.log(incrementOptional());
console.log(incrementOptional(undefined));
// Compiler errors:
// console.log(incrementOptional(null));

// null and undefined are types now, that only match each value
function incrementNullable(value: number | null): number {
  if (value === null) {
    return 0;
  }

  // Type narrowing: value can only be number here
  return value + 1;
}

console.log(incrementNullable(1));
console.log(incrementNullable(null));
// Compiler errors:
// console.log(incrementNullable());
// console.log(incrementNullable(undefined));

function getError(): Error {
  return new Error("fail");
//  return; // Compiler error, undefined not assignable to Error in strict null mode
//  return null; // Compiler error
}
