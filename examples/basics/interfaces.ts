// Interfaces
// ==========
// Main contribution of TypeScript: to model JavaScript objects.
// It doesn't block ability to manage dynamic instances.

enum NotificationType {
  info,
  warning,
  failure,
}

// No need for I prefix. This is a type that can have its own instances.
interface Notification {
  name: string;
  message: string;
  type: NotificationType;
}

const error = { message: "Broken" };

// All required props must be specified.
// const notification: Notification = error;

// Cast allows to bypass some checks.
const notification = error as Notification;

const info: Notification = {
  name: "Saved",
  message: "Successfully saved",
  type: NotificationType.info,
};

// Cannot provide extra properties in literal objects.
// This prevents typos (imagine a mispelled optional property).
// I don't recommend --suppressExcessPropertyErrors to bypass it.
// const warning: Notification = {
//   message: "Empty",
//   type: NotificationType.warning,
//   color: "yellow",
// };

const withColor = {
  name: "EmptyCheck",
  message: "Is empty",
  type: NotificationType.warning,
  color: "yellow",
};

// Existing instances can have extra properties.
const warning = withColor as Notification;

// Structural typing
function showError(error: Error) {
  console.log(error);
}

// Notification has name and message, so it matches Error
showError(warning);

// No need for contracts project.
// Two modules can define their own types with same structure.
// Instances will match both interfaces without further declaration.
// If any of them changes, compiler will detect wrong usages.

// Readonly interfaces / classes
interface NameReadOnly {
  readonly name: string;
}

const nameReadOnly: NameReadOnly = warning;
// nameReadOnly.name = "new"; // Compiler error: this type doesn't allow changing the name
// Note the instance is not immutable, only the type
// Soon: ReadOnly<T>. Recursive?

interface WithOptional {
  name: string;
  maybe?: string;
}

const withOptional: WithOptional = warning;
withOptional.maybe === undefined;
"maybe" in withOptional === false;