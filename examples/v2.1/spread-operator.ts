// Syntax replacement for object.assign() or $.extend()
function spreadProperties() {
    const xy = { x: 1, y: 2 };
    const yz = { y: 3, z: 4 }; 

    const copy = { ...xy };

    const merged = { ...xy, ...yz };
    // Last wins, so merged.y === 3

    // How to use default props
    const defaultToZero = {
        x: 0,
        y: 0,
        z: 0,
        ...xy,
    }
}

// Extends the destructuring operator
function restProperties() {
    const xyz = { x: 1, y: 1, z: 1 };

    const { z, ...xy } = xyz;
}

function restInArrayArgument([ head, ...tail ]: number[]) {

}

function restInObjectArgument({ name, ...error }: Notification) {

}
