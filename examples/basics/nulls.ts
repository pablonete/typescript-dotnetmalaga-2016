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
// Argument accept undefined because it's optional
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

function definiteAssignmentAnalysis() {
  let n: number;
  // console.log(n); // Compiler error: n doesn't support default undefined. 
  n = 3;
  console.log(n); // Valid usage because n is initialized
}

// Don't confuse optional with nullable
interface WithOptional {
  maybe?: string;
}

// Property may or may not be present
const a: WithOptional = {};

interface WithNullable {
  maybe: string | null;
}

// Property must be present, but can be string or null
const b: WithNullable = { maybe: null };

// Same applies to function arguments