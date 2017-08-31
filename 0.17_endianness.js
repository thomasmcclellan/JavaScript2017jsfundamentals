//"Endian" or "endianness" (or "byte-order")
//Describes how computers organize the bytes that make up numbers

//Each memory storage location has an index or address
//Every byte can store an 8-but number so you must reserve more than one byte to store a large number

//By far the most common ordering of multiple bytes in one number is the LITTLE-ENDIAN
//This is used on all Intel processors
//Little-endian means storing bytes in order of least-to-most-significant (where the leaset significant byte takes the first or lowest address)
//This is comparable to a common European way of writing dates (DDMMYYYY)

//BIG-ENDIAN is the opposite order, comparable to an ISO date (YYYYMMDD)
//Big-endian is also often called "network byte order" because Internet standards usually require data to be stored big-endian