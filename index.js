'use strict';

console.log("Hello world");	//normal console statement

let hello = () => console.log("Hello world");	//lambda function	
hello();
console.log(hello);

let hellof = function (){	//function expression
	console.log("Hello world");
}
console.log(hellof);
hellof();

function fhello(){	//normal function
	console.log("Hello world");
}
fhello();

console.log(hello.toString());
console.log(hellof.toString());
