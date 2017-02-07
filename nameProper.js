var name = "FIRST LAST"

function nameProper(oldName){
	
	var finalName = oldName;
	var names = oldName.split(" ");
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].slice(0,1).toUpperCase() + names[1].slice(1).toLowerCase();
	finalName = names.join(" ");
	return finalName;
};

console.log(nameProper(name));