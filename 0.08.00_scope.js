// Two different types of scope
// Local scope = USA
// Global scope = Earth

// var => function-scoped
// const => function-scoped
// let => block-scoped => operates the exact same way as var, only stays within the scope it's in

function f(){
	conosle.log(x); //local scope
}

console.log(f); //global scope