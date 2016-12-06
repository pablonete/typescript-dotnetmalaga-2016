interface VisibilityItem {
  isVisible: boolean;
}

// Intersection type must be both
function doNothing(notification: Notification & VisibilityItem) {
  // You don't need a new name, but instances must match both types
}

// Union types can be any
function hide(items: VisibilityItem | VisibilityItem[]): void {
  // Main problem of union types is naming
  // so let's shortcut soon
  if (!Array.isArray(items)) {
    hide([items]);
  } else {
    // Control flow based type analysis: `items` is array here.
    for (let item of items) {
      item.isVisible = false;
    }
  }
}

interface Egg {};

// Example from https://www.typescriptlang.org/docs/handbook/advanced-types.html
interface Bird {
  // String literal types: they are string, but only allow one value.
  // Useful to create discriminating union types
  type: "bird";
  fly(): void;
  layEggs(): Egg[];
}

interface Fish {
  type: "fish";
  swim(): void;
  layEggs(): Egg[];
}

// Type aliases
type Pet = Bird | Fish;

// Custom type guard
function isFish(pet: Pet): pet is Fish {
  const fish = pet as Fish;
  // Presence of the swim method is a type marker
  return Boolean(fish.swim);
}

function play(pet: Pet): void {
  if (isFish(pet)) {
    // Control flow based type analysis in all its glory
    pet.swim();
  } else {
    pet.fly();
  }
}

// Type narrowing!
// It can also be achieved with typeof (primitives) or instanceof (classes)

// We can use literal types as markers too
function playSwitch(pet: Pet): void {
  switch (pet.type) {
    case "fish":
      return pet.swim();
    case "bird":
      return pet.fly();
  }
}

// More literal types
type Falsy = "" | 0 | false | null | undefined;