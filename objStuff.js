let joe = {				//This is Joe. Say hi, Joe.
	name: "joe",
	age: 12,
	hobby: "sleeping",
	"is a good boy": false		//don't be like Joe
}

joe.bio = "I em smort boi, and i em speling and grramer ggod.";

console.log(joe);
joe['is a good boy'] = true;		//be like Joe
console.log(joe['is a good boy']);
delete joe.hobby;
console.log(joe);
joe["number of friends"] = 0		//Joe got a sad life ngl

//Let's leave Joe for now. He'll probably make some friends in the future.

function whoAreU(name, age, school, grade, talent, favSubj, character){		//Yeah I'm asking for your details
	return {
		name,
		age,
		school,
		grade,
		talent,
		favSubj,
		[character]: true
	};
}

let someone = whoAreU("Kub", "why will I tell ya", "none of your business", "won't tell else u will guess my age", "sleeping", "idk", "idk");
console.log("idk" in someone);

for(key in someone){
	console.log(key + "\t" + someone[key]);
}

let peter = joe;	//peter peter pumpkin yeeter
peter.name = "Peter Parker";	//insert uncanny meme
console.log(joe.name);
//Ok joe is now peter parker

let bob = Object.assign({}, joe);
bob.name = "bob";
bob.age = 15;	//joe's senpai
console.log(bob);

let bottle = {
	name: "Sprite"
};	//average reusable sprite bottle
Object.assign(bottle, {
	name: "Pepsi",	//when da sprite bottle become pepsi
	colour: "transparent",
	size: 12	//12 inches bottle
});
console.log(bottle);
let jeff = Object.assign({}, {name: "Jeff"}, {age: 14}, {school: "dababy sus amogus school"});
console.log(jeff);
