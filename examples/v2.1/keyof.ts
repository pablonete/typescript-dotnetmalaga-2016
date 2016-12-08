function testKeyOf() {
    // keyof yields a constrained string
    let propertyName: keyof Notification = "name";
    propertyName = "message";

    // Compiler error
    // propertyName = "typo";
}

function testIndexedAccessTypes() {
    // Uses the type from message property
    let message: Notification["message"];

    let type: Notification["type"];
    // Type is the enum type
}

// These new concepts, combined with generics, allow to type a lot of Javascript standard patterns 
function get<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
}

function testTypedGet() {
    const notification: Notification = {
        name: "Saved",
        message: "Succeed",
        type: NotificationType.info,
    };

    const type = get(notification, "type");

    // Compiler error: typo is not a property name of Notification
    // const type = get(notification, "typo");
}
