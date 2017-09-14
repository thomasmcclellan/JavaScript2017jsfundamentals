// Nodemon is used during development of a node.js based application
// It will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application

// Nodemon does NOT require any changes to your code or method of development
// It smily wraps your node application and keeps an eye on any files that have changed

//REMEMBER: nodemon is a replacement wrapper for NODE => it is essentially replacing 'node' on the command line when you run your script

//Usage:
//wraps your application so you can pass all the arguments you would normally pass to your app
nodemon [your node app]

//for CLI options, use the -h (or -help) argument
nodemon -h

//supports running and monitoring COFFEE-SCRIPT
nodemon server.coffee 

//can also pass the debug flag to node through the command line as you would normally
nodemon --debug ./server.js 80

//if you have a package.json file for your app, you can omit the main script entirely and nodemon will read the package.json for the main property and use that value as the app

//nodemon will also search for the scripts.start property in the package.json 


//A config files can take any of the command line arguments as JSON key values
{
	"verbose": true,
	"ignore": ["*.test.js", "fixtures/*"],
	"execMap": {
		"rb": "ruby",
		"pde": "processing --sketch={{pwd}} --run"
	}
}

//Go here: https://github.com/remy/nodemon#nodemon for more