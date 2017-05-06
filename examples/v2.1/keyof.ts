function testKeyOf() {
    // keyof yields a constrained string
    let propertyName: keyof MyNotification = "name";
    propertyName = "message";

    // Compiler error
    // propertyName = "typo";
}

function testIndexedAccessTypes() {
    // Uses the type from message property
    let message: MyNotification["message"];

    let type: MyNotification["type"];
    // Type is the enum type
}

// These new concepts, combined with generics, allow to type a lot of Javascript standard patterns 
function get<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
}

function testTypedGet() {
    const notification: MyNotification = {
        name: "Saved",
        message: "Succeed",
        type: NotificationType.info,
    };

    const type = get(notification, "type");

    // Compiler error: typo is not a property name of MyNotification
    // const type = get(notification, "typo");
}
