// Goal: avoid this verbosity
const kind: "light" = "light";

function avoidSillyComparisons() {
    // Compiler error: types 1 and 2 are not compatible, although both are number
    // if (1 === 2) {}
    // Same compiler error even if it's true
    // if (1 !== 2) {}

    // Works for const or readonly, because they keep the literal type
    const uno = 1;
    // if (uno === 2) {}

    // But let variables get the "widened literal type", so they accept any number 
    let n = 1;
    n = 2;
}

// General suggestion: consider using strongly-typed literals instead of enums
type NotificationLiteralType = "info" | "warning" | "error";
function getNotifications(type: NotificationLiteralType) {

}

getNotifications("info");

// Compile error
// getNotifications("wrong");
