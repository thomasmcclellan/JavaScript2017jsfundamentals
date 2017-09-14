// Creates a JS date instance that represents a single moment in time
// Date objects are based on a time value that is a number of milliseconds since 1/01/70 

new Date();
new Date(value);
new Date(dataString);
new Date(year, month[, date[, minutes[, seconds[, milliseconds]]]]);

// JS date objects can only be instantiated by calling JS Date as a constructor: calling it as a regular function (without a new operator) will return a string rather than a Date object
// JS Date objects have no literal syntax

// Parameters:
// Where Date is called as a constructor with more than one argument, if values > their logical range, the adjacent value will be ajusted
// Where Date is called as a constructor with more than one argument, the specified arguments represent local time
new Date.UTC(); //to have UTC rather than local time