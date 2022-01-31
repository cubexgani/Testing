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
