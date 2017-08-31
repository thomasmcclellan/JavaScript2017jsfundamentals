// The ArrayBuffer object is use to represent a generic, fixed-length, ray binary data buffer.  
// You can't directly manipulate the contents;
// Instead, you create one of the TYPED ARRAY OBJECTS or a DATAVIEW object which represents the buffer in a specific format, and uses that to read and write the contents of the buffer

new ArrayBuffer(length);

// Parameters: 
// Length => The size, in bytes, of the array buffer to create
// Return value => A new ArrayBuffer of the specified size.  Its contents are initialized at 0.
// Exceptions => A RangeError is thrown if the length is > Number.MAX_SAFE_INTEGER (>= 2 ** 53), or negative

let buffer = new ArrayBuffer(8);
let view = new Int32Array(buffer);