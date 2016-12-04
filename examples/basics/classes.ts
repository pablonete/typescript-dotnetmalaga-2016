class Control {
    private state: any;

    draw() {
      console.log("draw");
    }
}

// Interfaces can extend classes, they only get types
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

// Classes exist on runtime. Interfaces don't, they are compile-time artifacts.
function createInstance<T>(constructor: { new (): T }): T {
  return new constructor();
}

const instance = createInstance(Button);

// createInstance(SelectableControl);

// You need tricks to check interfaces in runtime. Welcome to Javascript.
// TypeScript gently won't add markers to generated code.
if ("select" in instance) {
  console.log("It's selectable!");
}

// But you can check classes by constructor 
if (instance.constructor === Button) {
  console.log("It's a button");
}

// or with instance of
const isButton = instance instanceof Button;

// const isSelectable = instance instanceof SelectableControl;

// Use class as type.
// Useless if you have protected/privates because they will never match.
// const mock: Control = {
//   // No visibility in interfaces.
//   // private state: 1,
//   draw() {
//     console.log("Do another drawing.");
//   }
// };
