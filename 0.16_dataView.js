// The DataView provides a low-level interface for reading and writing multiple number types in an ArrayBuffer irrespective of the platform's endianness
new DataView(buffer [, byteOffset [, byteLength]]);

//Parameters:
//Buffer => An existing ArrayBuffer or SharedArrayBuffer to use as the storage for the new DataView object
//ByteOffset => The offset, in bytes, to be the first byte in the specified buffer for the new view to reference
//ByteLength => The number of elements in the byte array 

//Exceptions:
//RangeError => Thrown if the byteOffset and byteLength result in the specified view extending past the end of the buffer

//Endianness:
//Multi-byte number formats are represented in memory differently depending on machine architecture
//DataView accessors provide explicit control of how data will be accessed irrespective of the platform architecture's endiannes

let littleEndian = (function(){
	let buffer = new ArrayBuffer(2);
	new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
	//Int16Array uses the platform's endiannes
	return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); //true or false