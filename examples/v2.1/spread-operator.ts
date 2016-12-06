// Cannot get this to work, even with target: "es2017"

function spreadProperties() {
    var obj = { x: 1, y: 2 };
    var obj1 = { ...obj, z: 3, y: 4 }; 
}

function restProperties() {
    var obj = {x:1, y: 1, z: 1};
    var {z, ...obj1} = obj;
}
