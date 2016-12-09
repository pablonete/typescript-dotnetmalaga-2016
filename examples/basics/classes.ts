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

class Button extends Control implements SelectableControl {
    select() { }
}

// If base class has private methods, only children of it can implement
// class Other implements SelectableControl {
//     select() { }
// }

// Use class as type.
// Useful for mocking.
// Fragile in some cases with protected/privates because they will never match.
const mockButton = {
  draw() {
    console.log("Do another drawing.");
  },
  select() {
    console.log("Do another select.");    
  }
} as Button;

// Classes exist on runtime. Interfaces don't, they are compile-time artifacts.
function createInstance<T>(constructor: { new (): T }): T {
  return new constructor();
}

const instance = createInstance(Button);

// createInstance(SelectableControl);

// You need tricks to check interfaces in runtime. Welcome to Javascript.
// TypeScript gently won't add markers to generated code. You can add them by your own,
// or use duck typing:
if ("select" in instance) {
  console.log("It's selectable!");
}

// But you can check classes by constructor 
if (instance.constructor === Button) {
  console.log("It's a button");
}

// or with instanceof to consider inheritance
const isButton = instance instanceof Button;

// Not for interfaces
// const isSelectable = instance instanceof SelectableControl;
