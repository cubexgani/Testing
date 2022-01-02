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

console.log("\n\n");	//new lines for no reason

//just experimenting with datatypes and stuff
let laugh = "haha";
console.log('u are idot '+laugh);

let fact = `1 + 2 is ${1 + 2}`;		//backtick strings are cool no cap
console.log(fact);

let life = 42;
let deez = 69420694206942069420694206942069420694206942069420n;		//dont ask
console.log(typeof life);
console.log(typeof deez);
console.log(typeof console)
console.log(typeof hello);
console.log(typeof Infinity);
console.log(typeof fact);

console.log("\n");

let nothin = null;
console.log(1/0);
console.log("nothin which is equal to " + nothin + " is " + typeof nothin);

let age;
console.log(age);

let t_or_f = life >= deez;
console.log(t_or_f);

//primitive type conversion
console.log("12"/"3");
console.log(typeof String(life));
console.log("\n")

let joe = "69420candice";		//no troll intended
console.log(Number(joe));
console.log(Number(true) + " + "+ Number(false) + " = " + (Number(true) + Number(false)));
console.log(Number(null));
console.log(Number(undefined));
console.log("\n");

console.log(Boolean("1"));
console.log(Boolean("0"))
console.log(Boolean(" "));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean("dorime"));
console.log(Boolean(life));	//Boolean() spam moment

console.log("\n");

//basic math operators
console.log(-life);

console.log(9**2);
console.log(69696**(1/2));
console.log(1 + 2 + 3 + '4' + 5 + '6' / '2' * 3);		//i need braincells
console.log(+joe);
console.log(-(age = "46"));
console.log(age + " is a " + typeof age + " but kool magic and now it is a " + typeof +age);

let a, b, c, d, e;
console.log(age + ((a = 4) + (b = c = '8')) - life);		//i need braincells part 2
console.log(a + " " + b + ' ' + c);
console.log(+true);
d = (+true + false, 2 + '18' / 3 - 4);
console.log(d);
console.log(e = a*=2);
