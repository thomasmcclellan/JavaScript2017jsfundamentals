// Fetch API provides an interface for fetching resources
// It provides definition of Req(request) and Res(response) objects
// This will allow them to be used wherever they are needed in the future, whther it's for service workers, Cache API and other similar things that handle or modify req/res

// The fetch() method takes one madatory arguemnt, the path to the resource you want to fetch
// It returns a promise that resolves to the res to that req, whether it's successful or not

// Once res is retrieved, there are a number of methods available to define what the body content is and how it should be handled