// AJAX stands for Asynchronous JavaScript And XML
// It is the use of the XMLHttpRequest object to communicate with servers
	// XMLHttpRequest => interacts with servers => can retrieve data from a URL without having to do a full page refresh => this enables a web page to update just part of a page without disrupting what the user is doing

// AJAX can send and receive info in various formats, including JSON, XML, HTML, and text files
// It's most appealing characteristic is it's 'asynchronous' nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

// The two major features of AJAX allow:
	// Making requests to the server without reloading the page
	// Receiving and working with data from the server

// HOW TO MAKE AN HTTP REQUEST:
if (window.XMLHttpRequest){
	httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject){
	httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
};

httpRequest.onreadystatechange = nameOfTheFunction;

httpRequest.onreadystatechange = function(){
	//Process the server response here
	httpRequest.open('GET', 'http://www.example.org/some.file', true);
	httpRequest.send();
};