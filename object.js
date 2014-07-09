console.info("Hello from properties.js");

var obj = {
    name: "Blah"
};

console.info("obj.hasOwnProperty('name'): ", obj.hasOwnProperty("name"));
console.info("obj.hasOwnProperty('toString'): ", obj.hasOwnProperty("toString"));
console.info("obj.propertyIsEnumerable('name'): ", obj.propertyIsEnumerable("name"));
console.info("Object.isExtensible(obj): ", Object.isExtensible(obj));
console.info("Object.isSealed(obj): ", Object.isSealed(obj));

var descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.info("descriptor.enumerable: ", descriptor.enumerable);
console.info("descriptor.configurable: ", descriptor.configurable);
console.info("descriptor.writable: ", descriptor.writable);
console.info("descriptor.value: ", descriptor.value);

